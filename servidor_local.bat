@echo off
title Servidor Local - The Binding of Mudkip
echo ========================================================
echo   Iniciando servidor local en http://localhost:8080 ...
echo   Presiona Ctrl+C en esta ventana para detenerlo.
echo ========================================================

powershell -ExecutionPolicy Bypass -Command "& {
  $port = 8080
  $listener = New-Object System.Net.HttpListener
  $listener.Prefixes.Add('http://localhost:' + $port + '/')
  $listener.Start()
  Start-Process ('http://localhost:' + $port + '/index.html')
  Write-Host ('Servidor activo en http://localhost:' + $port + '/')
  $root = $PSScriptRoot
  if (-not $root) { $root = Get-Location }

  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response

    $rawPath = $req.Url.LocalPath.TrimStart('/')
    if ($rawPath -eq '') { $rawPath = 'index.html' }
    $localFile = Join-Path $root $rawPath

    if (Test-Path $localFile -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
      $contentType = 'application/octet-stream'
      if ($ext -eq '.html') { $contentType = 'text/html' }
      elseif ($ext -eq '.css') { $contentType = 'text/css' }
      elseif ($ext -eq '.js') { $contentType = 'application/javascript' }
      elseif ($ext -eq '.png') { $contentType = 'image/png' }
      elseif ($ext -eq '.jpg' -or $ext -eq '.jpeg') { $contentType = 'image/jpeg' }
      elseif ($ext -eq '.svg') { $contentType = 'image/svg+xml' }

      $res.ContentType = $contentType
      $bytes = [System.IO.File]::ReadAllBytes($localFile)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
    $res.Close()
  }
}"
