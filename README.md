# The Binding of Mudkip 🌊 (Pokémon Roguelike)

Un roguelike de acción y mazmorras estilo *The Binding of Isaac* con temática Pokémon, desarrollado en HTML5 Canvas puro y Web Audio API.

---

## 🎮 Mejoras & Nuevas Características

1. **Corrección de Bucle y Velocidad Constante (Bug Fix):**
   * Se solucionó el problema en el cual reiniciar o morir acumulaba bucles concurrentes de `requestAnimationFrame`. Ahora, cada vez que reinicias o vuelves a intentarlo, se cancela estrictamente cualquier bucle previo y se reinician los estados de entrada, garantizando que el juego corra siempre a la **misma velocidad exacta (60 FPS estables)** sin acelerarse.

2. **Casco Dentado Anclado Píxel por Píxel:**
   * Se mapearon las coordenadas exactas de la cabeza de Mudkip para cada fotograma y las 8 direcciones de sus animaciones (`walk`, `idle` y `hurt`).
   * El casco ya no se queda flotando en el aire ni se separa cuando camina hacia la izquierda o derecha: se mueve al milímetro con el movimiento de su cabeza.

2. **Puertas de Mazmorra Acopladas al Fondo:**
   * **Portales de Piedra Tallada:** Las puertas norte, este y oeste ahora tienen arcos de piedra y columnas con musgo que se integran con los muros del fondo.
   * **Camino Sur Sellado:** En las salas donde no hay salida hacia el sur, el camino inferior se bloquea con una barricada de piedra y arbustos para que el fondo coincida con el minimapa.
   * **Compuertas de Hierro:** Mientras queden enemigos en la sala, rejas de hierro con pinchos rojos y candados bloquean el paso. Al despejar la sala, el umbral se abre con un brillo esmeralda.

3. **Nuevos Enemigos Tiradores y Ataques a Distancia:**
   * **Poochyena Sombrío (Spitter):** Distinguible por su aura oscura y ojos violetas. Dispara **Pulso Umbrío** (esferas de sombra) desde lejos antes de embestir.
   * **Houndour Francotirador:** Dispara ráfagas de **Ascuas en Abanico** (doble y triple disparo angular).
   * **Houndour Alfa (Mini-Jefe en Nido Alfa):** Tamaño gigante (30 HP), resistencia aumentada y dispara la temible **Mega Ascua**, una bola de fuego explosiva que al impactar se divide en 4 proyectiles ardientes en cruz (`+`).

4. **Hitbox Física del Río y el Puente:**
   * En la **Cascada del Río (Sala Norte)**, el río central no se puede cruzar nadando.
   * La única forma de cruzar entre la orilla izquierda y derecha es a través del **puente de madera central**.
   * Los proyectiles de agua, ascuas y orbes oscuros sí vuelan sobre el agua, permitiendo combates a distancia entre ambas orillas.

---

## 🚀 Cómo Jugar

* Haz doble clic en **`iniciar_juego.bat`** o abre **`index.html`** directamente en Google Chrome, Microsoft Edge o Firefox.
* O ejecuta **`servidor_local.bat`** para jugar en `http://localhost:8080/`.

### Controles:
* **Moverse:** `W`, `A`, `S`, `D`
* **Disparar:** Flechas del teclado (`↑`, `↓`, `←`, `→`) o con el botón izquierdo del **Ratón** apuntando hacia donde quieras disparar.
* **Móvil / Táctil:** Botón **`[📱 Táctil]`** para mostrar joysticks virtuales en pantalla.
