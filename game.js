// =============================================================================
// THE BINDING OF MUDKIP - POKÉMON ROGUELIKE
// =============================================================================

// Web Audio API Sound Synthesizer
class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playWaterGun() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.13);
  }

  playEmber() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.linearRampToValueAtTime(450, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.2);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.21);
  }

  playShadowOrb() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(280, now + 0.1);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.25);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.26);
  }

  playBite() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  playHit() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.09);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playHurt() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.22);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.23);
  }

  playShockwave() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.45);
    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.46);

    const crack = this.ctx.createOscillator();
    const crackGain = this.ctx.createGain();
    crack.type = 'square';
    crack.frequency.setValueAtTime(320, now);
    crack.frequency.exponentialRampToValueAtTime(40, now + 0.2);
    crackGain.gain.setValueAtTime(0.3, now);
    crackGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    crack.connect(crackGain);
    crackGain.connect(this.ctx.destination);
    crack.start(now);
    crack.stop(now + 0.21);
  }

  playItemPickup() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      gain.gain.setValueAtTime(0.3, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.26);
    });
  }

  playRoomClear() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.25, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.21);
    });
  }

  playDoorOpen() {
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.linearRampToValueAtTime(140, now + 0.15);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.26);
  }
}

const sounds = new SoundController();

// =============================================================================
// ASSET LOADER
// =============================================================================
const assets = {
  mudkip: {
    walk: { img: new Image(), w: 32, h: 40, frames: 6 },
    attack: { img: new Image(), w: 72, h: 80, frames: 10 },
    hurt: { img: new Image(), w: 48, h: 56, frames: 2 },
    idle: { img: new Image(), w: 24, h: 40, frames: 7 }
  },
  poochyena: {
    walk: { img: new Image(), w: 32, h: 48, frames: 5 },
    attack: { img: new Image(), w: 64, h: 80, frames: 11 },
    hurt: { img: new Image(), w: 48, h: 64, frames: 2 }
  },
  houndour: {
    walk: { img: new Image(), w: 32, h: 40, frames: 4 },
    attack: { img: new Image(), w: 64, h: 80, frames: 10 },
    hurt: { img: new Image(), w: 40, h: 56, frames: 2 }
  },
  items: {
    rocky_helmet: { img: new Image(), w: 160, h: 160 }
  },
  rooms: {
    normal: { img: new Image() },
    river: { img: new Image() },
    treasure: { img: new Image() }
  }
};

let loadedAssets = 0;
const totalAssetsToLoad = 14;

function initAssetLoading(onComplete) {
  const list = [
    { target: assets.mudkip.walk.img, src: 'assets/mudkip/Walk-Anim.png' },
    { target: assets.mudkip.attack.img, src: 'assets/mudkip/Attack-Anim.png' },
    { target: assets.mudkip.hurt.img, src: 'assets/mudkip/Hurt-Anim.png' },
    { target: assets.mudkip.idle.img, src: 'assets/mudkip/Idle-Anim.png' },
    { target: assets.poochyena.walk.img, src: 'assets/poochyena/Walk-Anim.png' },
    { target: assets.poochyena.attack.img, src: 'assets/poochyena/Attack-Anim.png' },
    { target: assets.poochyena.hurt.img, src: 'assets/poochyena/Hurt-Anim.png' },
    { target: assets.houndour.walk.img, src: 'assets/houndour/Walk-Anim.png' },
    { target: assets.houndour.attack.img, src: 'assets/houndour/Attack-Anim.png' },
    { target: assets.houndour.hurt.img, src: 'assets/houndour/Hurt-Anim.png' },
    { target: assets.items.rocky_helmet.img, src: 'assets/items/rocky_helmet.png' },
    { target: assets.rooms.normal.img, src: 'assets/rooms/room_normal.jpg' },
    { target: assets.rooms.river.img, src: 'assets/rooms/room_river.jpg' },
    { target: assets.rooms.treasure.img, src: 'assets/rooms/room_treasure.jpg' }
  ];

  list.forEach(item => {
    item.target.onload = () => {
      loadedAssets++;
      document.getElementById('loading-text').innerText =
        `Cargando recursos (${loadedAssets}/${totalAssetsToLoad})...`;
      if (loadedAssets >= totalAssetsToLoad) {
        setTimeout(onComplete, 200);
      }
    };
    item.target.onerror = () => {
      console.warn('Error cargando:', item.src);
      loadedAssets++;
      if (loadedAssets >= totalAssetsToLoad) {
        setTimeout(onComplete, 200);
      }
    };
    item.target.src = item.src;
  });
}

// =============================================================================
// EXACT MUDKIP HEAD ANCHORS (Pixel-perfect for every frame & direction)
// Prevents Casco Dentado from ever floating or misaligning!
// =============================================================================
const MUDKIP_HEAD_OFFSETS = {
  walk: [
    [[15, 8], [15, 4], [16, 6], [16, 8], [16, 11], [15, 10]], // Dir 0: Down
    [[16, 8], [14, 7], [16, 6], [21, 8], [22, 10], [18, 9]],  // Dir 1: Down-Right
    [[17, 7], [16, 5], [17, 4], [22, 6], [23, 8], [19, 7]],   // Dir 2: Right
    [[16, 6], [14, 6], [16, 5], [21, 4], [22, 5], [18, 5]],   // Dir 3: Up-Right
    [[15, 6], [15, 4], [15, 0], [15, 3], [15, 4], [15, 4]],   // Dir 4: Up
    [[13, 6], [14, 6], [12, 5], [8, 4], [7, 5], [11, 5]],     // Dir 5: Up-Left
    [[12, 7], [13, 5], [12, 4], [7, 6], [6, 8], [10, 7]],     // Dir 6: Left
    [[13, 8], [14, 7], [12, 6], [8, 8], [7, 10], [11, 9]]     // Dir 7: Down-Left
  ],
  idle: [
    [[11, 8], [11, 6], [11, 4], [11, 3], [12, 5], [12, 6], [12, 8]], // Dir 0
    [[12, 8], [10, 7], [10, 5], [10, 4], [14, 5], [14, 7], [14, 9]], // Dir 1
    [[13, 7], [11, 5], [11, 3], [11, 2], [15, 5], [15, 6], [15, 8]], // Dir 2
    [[12, 6], [10, 5], [10, 3], [10, 2], [14, 4], [14, 5], [14, 7]], // Dir 3
    [[11, 6], [11, 4], [11, 2], [11, 1], [11, 5], [11, 6], [11, 8]], // Dir 4
    [[9, 6], [10, 5], [10, 3], [10, 2], [7, 4], [7, 5], [7, 7]],     // Dir 5
    [[8, 7], [10, 5], [10, 3], [10, 2], [6, 5], [6, 6], [6, 8]],     // Dir 6
    [[9, 8], [10, 7], [10, 5], [10, 4], [7, 5], [7, 7], [7, 9]]      // Dir 7
  ],
  hurt: [
    [[17, 3], [17, 2]], [[9, 2], [8, 1]], [[8, 7], [7, 7]], [[14, 16], [13, 17]],
    [[27, 9], [27, 10]], [[30, 15], [31, 16]], [[36, 7], [37, 7]], [[35, 2], [36, 1]]
  ]
};

function getMudkipHeadAnchor(state, dir, frame) {
  let table = MUDKIP_HEAD_OFFSETS[state] || MUDKIP_HEAD_OFFSETS.idle;
  const dirArr = table[dir] || table[0];
  const coord = dirArr[frame % dirArr.length] || [16, 6];
  return { x: coord[0], y: coord[1] };
}

// Direction helper
function vectorToDirection(dx, dy, currentDir) {
  if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) return currentDir;
  const deg = Math.atan2(dy, dx) * (180 / Math.PI);
  if (deg >= 67.5 && deg < 112.5) return 0;   // Down
  if (deg >= 22.5 && deg < 67.5) return 1;    // Down-Right
  if (deg >= -22.5 && deg < 22.5) return 2;   // Right
  if (deg >= -67.5 && deg < -22.5) return 3;  // Up-Right
  if (deg >= -112.5 && deg < -67.5) return 4; // Up
  if (deg >= -157.5 && deg < -112.5) return 5;// Up-Left
  if (deg >= 112.5 && deg < 157.5) return 7;  // Down-Left
  return 6; // Left
}

// =============================================================================
// ROOM BOUNDARIES & HITBOXES
// =============================================================================
const CANVAS_W = 960;
const CANVAS_H = 640;

const WALL_LEFT = 85;
const WALL_RIGHT = 875;
const WALL_TOP = 85;
const WALL_BOTTOM = 555;

const MID_X = CANVAS_W / 2; // 480
const MID_Y = CANVAS_H / 2; // 320
const DOOR_WIDTH = 76;

// River geometry
const RIVER_X_MIN = 422;
const RIVER_X_MAX = 538;
const BRIDGE_Y_MIN = 280;
const BRIDGE_Y_MAX = 385;

// =============================================================================
// PLAYER: MUDKIP
// =============================================================================
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2.4; // Calibrated speed
    this.radius = 16;
    this.dir = 0;

    this.maxHp = 6;
    this.hp = 6;
    this.invulnerableTimer = 0;

    this.fireDelay = 26; // Calibrated fire delay
    this.fireCooldown = 0;
    this.bulletSpeed = 5.2;
    this.bulletDamage = 3.5;
    this.bulletRange = 240;

    this.hasRockyHelmet = false;
    this.state = 'idle';
    this.animTimer = 0;
    this.frameIndex = 0;
    this.scale = 2.4;

    this.pickupCelebrationTimer = 0;
  }

  update(input, dungeon, projectiles, particles, onDoorTrigger) {
    if (this.invulnerableTimer > 0) this.invulnerableTimer--;

    if (this.pickupCelebrationTimer > 0) {
      this.pickupCelebrationTimer--;
      this.state = 'idle';
      this.dir = 0;
      return;
    }

    let mx = 0;
    let my = 0;
    if (input.keys['KeyW'] || input.keys['ArrowUpMove']) my -= 1;
    if (input.keys['KeyS'] || input.keys['ArrowDownMove']) my += 1;
    if (input.keys['KeyA'] || input.keys['ArrowLeftMove']) mx -= 1;
    if (input.keys['KeyD'] || input.keys['ArrowRightMove']) mx += 1;

    if (input.touchMove.active) {
      mx += input.touchMove.dx;
      my += input.touchMove.dy;
    }

    const mLen = Math.hypot(mx, my);
    if (mLen > 0.05) {
      const normX = mx / Math.max(1, mLen);
      const normY = my / Math.max(1, mLen);
      this.vx = normX * this.speed;
      this.vy = normY * this.speed;
      this.state = 'walk';
      this.dir = vectorToDirection(this.vx, this.vy, this.dir);
    } else {
      this.vx *= 0.7;
      this.vy *= 0.7;
      if (Math.abs(this.vx) < 0.1 && Math.abs(this.vy) < 0.1) {
        this.vx = 0;
        this.vy = 0;
        this.state = 'idle';
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    const currentRoom = dungeon.getCurrentRoom();
    if (currentRoom) {
      this.handleCollisions(currentRoom, onDoorTrigger);
    }

    if (this.fireCooldown > 0) this.fireCooldown--;

    let sx = 0;
    let sy = 0;
    if (input.keys['ArrowUp']) sy -= 1;
    if (input.keys['ArrowDown']) sy += 1;
    if (input.keys['ArrowLeft']) sx -= 1;
    if (input.keys['ArrowRight']) sx += 1;

    if (input.mouse.down) {
      const dx = input.mouse.x - this.x;
      const dy = input.mouse.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 10) {
        sx = dx / dist;
        sy = dy / dist;
      }
    }

    if (input.touchShoot.active) {
      sx = input.touchShoot.dx;
      sy = input.touchShoot.dy;
    }

    const sLen = Math.hypot(sx, sy);
    if (sLen > 0.1 && this.fireCooldown <= 0) {
      const shootDirX = sx / sLen;
      const shootDirY = sy / sLen;
      this.shootWaterGun(shootDirX, shootDirY, projectiles, particles);
      this.fireCooldown = this.fireDelay;
      this.dir = vectorToDirection(shootDirX, shootDirY, this.dir);
    }

    this.animTimer++;
    const animConfig = this.state === 'walk' ? assets.mudkip.walk : assets.mudkip.idle;
    const speedTicks = this.state === 'walk' ? 8 : 11;
    if (this.animTimer >= speedTicks) {
      this.animTimer = 0;
      this.frameIndex = (this.frameIndex + 1) % animConfig.frames;
    }
  }

  handleCollisions(room, onDoorTrigger) {
    const isAtTopDoorway = Math.abs(this.x - MID_X) < (DOOR_WIDTH / 2);
    const isAtBottomDoorway = Math.abs(this.x - MID_X) < (DOOR_WIDTH / 2);
    const isAtLeftDoorway = Math.abs(this.y - MID_Y) < (DOOR_WIDTH / 2);
    const isAtRightDoorway = Math.abs(this.y - MID_Y) < (DOOR_WIDTH / 2);

    // 1. TOP DOOR / WALL
    if (this.y < WALL_TOP + this.radius) {
      if (room.doors.top && room.cleared && isAtTopDoorway) {
        if (this.y <= WALL_TOP - 16) {
          onDoorTrigger('top');
          return;
        }
      } else {
        this.y = WALL_TOP + this.radius;
      }
    }

    // 2. BOTTOM DOOR / WALL
    if (this.y > WALL_BOTTOM - this.radius) {
      if (room.doors.bottom && room.cleared && isAtBottomDoorway) {
        if (this.y >= WALL_BOTTOM + 16) {
          onDoorTrigger('bottom');
          return;
        }
      } else {
        this.y = WALL_BOTTOM - this.radius;
      }
    }

    // 3. LEFT DOOR / WALL
    if (this.x < WALL_LEFT + this.radius) {
      if (room.doors.left && room.cleared && isAtLeftDoorway) {
        if (this.x <= WALL_LEFT - 16) {
          onDoorTrigger('left');
          return;
        }
      } else {
        this.x = WALL_LEFT + this.radius;
      }
    }

    // 4. RIGHT DOOR / WALL
    if (this.x > WALL_RIGHT - this.radius) {
      if (room.doors.right && room.cleared && isAtRightDoorway) {
        if (this.x >= WALL_RIGHT + 16) {
          onDoorTrigger('right');
          return;
        }
      } else {
        this.x = WALL_RIGHT - this.radius;
      }
    }

    // River collision
    if (room.bgType === 'river') {
      applyRiverCollision(this);
    }

    // Treasure room obstacles
    if (room.bgType === 'treasure') {
      applyCircleObstacle(this, 185, 485, 42); // Well
      applyCircleObstacle(this, 735, 330, 50); // Giant tree trunk
    }
  }

  shootWaterGun(dirX, dirY, projectiles, particles) {
    sounds.playWaterGun();
    const spawnX = this.x + dirX * 18;
    const spawnY = this.y + dirY * 18 - 4;
    projectiles.push(
      new WaterBullet(
        spawnX,
        spawnY,
        dirX * this.bulletSpeed + this.vx * 0.2,
        dirY * this.bulletSpeed + this.vy * 0.2,
        this.bulletDamage,
        this.bulletRange
      )
    );

    for (let i = 0; i < 4; i++) {
      particles.push(
        new WaterParticle(
          spawnX,
          spawnY,
          (Math.random() - 0.5) * 3 - dirX * 1.5,
          (Math.random() - 0.5) * 3 - dirY * 1.5,
          '#6ec1e4'
        )
      );
    }
  }

  takeDamage(amount, dungeon, particles, cameraShake) {
    if (this.invulnerableTimer > 0) return;
    this.hp -= amount;
    this.invulnerableTimer = 45;
    sounds.playHurt();
    cameraShake(10);

    for (let i = 0; i < 8; i++) {
      particles.push(
        new BloodParticle(this.x, this.y, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6)
      );
    }

    if (this.hasRockyHelmet) {
      this.triggerRockyShockwave(dungeon, particles, cameraShake);
    }
  }

  triggerRockyShockwave(dungeon, particles, cameraShake) {
    sounds.playShockwave();
    cameraShake(18);

    const radius = 175;
    const shockDamage = 9;

    particles.push(new ShockwaveVisual(this.x, this.y, radius));

    for (let a = 0; a < Math.PI * 2; a += 0.25) {
      const dist = Math.random() * (radius - 30) + 20;
      const rockX = this.x + Math.cos(a) * dist;
      const rockY = this.y + Math.sin(a) * dist;
      particles.push(
        new RockSpikeParticle(
          rockX,
          rockY,
          Math.cos(a) * (Math.random() * 4 + 2),
          Math.sin(a) * (Math.random() * 4 + 2)
        )
      );
    }

    const currentRoom = dungeon.getCurrentRoom();
    if (currentRoom) {
      currentRoom.enemies.forEach(enemy => {
        const dx = enemy.x - this.x;
        const dy = enemy.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist <= radius) {
          enemy.takeDamage(shockDamage, particles);
          const kbPower = 11;
          const kx = dist > 0 ? (dx / dist) * kbPower : 0;
          const ky = dist > 0 ? (dy / dist) * kbPower : -kbPower;
          enemy.vx += kx;
          enemy.vy += ky;
        }
      });
    }
  }

  draw(ctx) {
    // Shadow
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 16, 16, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    if (this.invulnerableTimer > 0 && Math.floor(this.invulnerableTimer / 4) % 2 === 0) {
      return;
    }

    const anim = this.state === 'walk' ? assets.mudkip.walk : assets.mudkip.idle;
    const frameW = anim.w;
    const frameH = anim.h;
    const col = this.frameIndex % anim.frames;
    const row = this.dir;

    const destW = frameW * this.scale;
    const destH = frameH * this.scale;
    const drawX = Math.round(this.x - destW / 2);
    const drawY = Math.round(this.y - destH / 2);

    if (this.pickupCelebrationTimer > 0) {
      ctx.drawImage(anim.img, 0, 0, frameW, frameH, drawX, drawY, destW, destH);
      ctx.save();
      const helmetImg = assets.items.rocky_helmet.img;
      const bob = Math.sin(Date.now() / 150) * 4;
      ctx.shadowColor = '#ffde59';
      ctx.shadowBlur = 15;
      ctx.drawImage(helmetImg, 0, 0, 160, 160, this.x - 24, this.y - 56 + bob, 48, 48);
      ctx.restore();
      return;
    }

    ctx.drawImage(
      anim.img,
      col * frameW,
      row * frameH,
      frameW,
      frameH,
      drawX,
      drawY,
      destW,
      destH
    );

    // DRAW CASCO DENTADO: ANCHORED FRAME-BY-FRAME TO HEAD PIXELS
    if (this.hasRockyHelmet) {
      const helmetImg = assets.items.rocky_helmet.img;
      const helmW = 17 * this.scale;
      const helmH = 14 * this.scale;

      const head = getMudkipHeadAnchor(this.state, this.dir, this.frameIndex);
      const helmDrawX = Math.round(drawX + (head.x * this.scale) - (helmW / 2));
      const helmDrawY = Math.round(drawY + (head.y * this.scale) - (helmH * 0.35));

      ctx.drawImage(helmetImg, 0, 0, 160, 160, helmDrawX, helmDrawY, helmW, helmH);
    }
  }
}

// Helper: Collision with River
function applyRiverCollision(entity) {
  if (entity.x + entity.radius > RIVER_X_MIN && entity.x - entity.radius < RIVER_X_MAX) {
    const onBridge = (entity.y >= BRIDGE_Y_MIN + entity.radius * 0.5) &&
                     (entity.y <= BRIDGE_Y_MAX - entity.radius * 0.5);

    if (onBridge) {
      if (entity.y < BRIDGE_Y_MIN + entity.radius) entity.y = BRIDGE_Y_MIN + entity.radius;
      if (entity.y > BRIDGE_Y_MAX - entity.radius) entity.y = BRIDGE_Y_MAX - entity.radius;
    } else {
      const midRiver = (RIVER_X_MIN + RIVER_X_MAX) / 2;
      if (entity.x < midRiver) {
        entity.x = RIVER_X_MIN - entity.radius;
      } else {
        entity.x = RIVER_X_MAX + entity.radius;
      }
    }
  }
}

function applyCircleObstacle(entity, ox, oy, oradius) {
  const dx = entity.x - ox;
  const dy = entity.y - oy;
  const dist = Math.hypot(dx, dy);
  const minDist = entity.radius + oradius;
  if (dist < minDist) {
    const angle = Math.atan2(dy, dx);
    entity.x = ox + Math.cos(angle) * minDist;
    entity.y = oy + Math.sin(angle) * minDist;
  }
}

// =============================================================================
// PROJECTILES
// =============================================================================
class WaterBullet {
  constructor(x, y, vx, vy, damage, maxRange) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.damage = damage;
    this.maxRange = maxRange;
    this.distanceTraveled = 0;
    this.radius = 7;
    this.dead = false;
    this.bubbleTimer = 0;
  }

  update(particles) {
    this.x += this.vx;
    this.y += this.vy;
    this.distanceTraveled += Math.hypot(this.vx, this.vy);

    this.bubbleTimer++;
    if (this.bubbleTimer % 2 === 0) {
      particles.push(
        new WaterParticle(
          this.x + (Math.random() - 0.5) * 4,
          this.y + (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 1,
          (Math.random() - 0.5) * 1,
          'rgba(140, 210, 255, 0.8)'
        )
      );
    }

    if (
      this.x <= WALL_LEFT ||
      this.x >= WALL_RIGHT ||
      this.y <= WALL_TOP ||
      this.y >= WALL_BOTTOM ||
      this.distanceTraveled >= this.maxRange
    ) {
      this.destroy(particles);
    }
  }

  destroy(particles) {
    this.dead = true;
    for (let i = 0; i < 6; i++) {
      particles.push(
        new WaterParticle(this.x, this.y, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, '#4da6ff')
      );
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#66ccff';
    ctx.shadowColor = '#3399ff';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.x - 2, this.y - 2, this.radius * 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class EmberBullet {
  constructor(x, y, vx, vy, damage, isMega = false) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.damage = damage;
    this.isMega = isMega;
    this.radius = isMega ? 11 : 6;
    this.dead = false;
    this.life = isMega ? 90 : 140;
  }

  update(player, particles, dungeon, cameraShake, enemyProjectiles) {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;

    particles.push(
      new FireParticle(
        this.x + (Math.random() - 0.5) * (this.isMega ? 8 : 4),
        this.y + (Math.random() - 0.5) * (this.isMega ? 8 : 4),
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1.5
      )
    );

    const distToPlayer = Math.hypot(player.x - this.x, player.y - this.y);
    if (distToPlayer <= player.radius + this.radius) {
      player.takeDamage(this.damage, dungeon, particles, cameraShake);
      this.destroy(particles, enemyProjectiles);
      return;
    }

    if (
      this.x <= WALL_LEFT ||
      this.x >= WALL_RIGHT ||
      this.y <= WALL_TOP ||
      this.y >= WALL_BOTTOM ||
      this.life <= 0
    ) {
      this.destroy(particles, enemyProjectiles);
    }
  }

  destroy(particles, enemyProjectiles) {
    this.dead = true;
    for (let i = 0; i < (this.isMega ? 12 : 6); i++) {
      particles.push(
        new FireParticle(this.x, this.y, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5)
      );
    }

    // Mega Ascua explodes into 4 fire embers in a cross pattern!
    if (this.isMega && enemyProjectiles) {
      sounds.playEmber();
      const crossDirs = [
        { vx: 3.5, vy: 0 },
        { vx: -3.5, vy: 0 },
        { vx: 0, vy: 3.5 },
        { vx: 0, vy: -3.5 }
      ];
      crossDirs.forEach(d => {
        enemyProjectiles.push(new EmberBullet(this.x, this.y, d.vx, d.vy, 1, false));
      });
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.isMega ? '#ff2200' : '#ff6622';
    ctx.shadowColor = '#ff2200';
    ctx.shadowBlur = this.isMega ? 15 : 10;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffdd44';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Dark Pulse / Shadow Orb (Disparado por Poochyena Sombrío)
class ShadowOrb {
  constructor(x, y, vx, vy, damage) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.damage = damage;
    this.radius = 7;
    this.dead = false;
    this.life = 130;
  }

  update(player, particles, dungeon, cameraShake) {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;

    particles.push(
      new DarkAuraParticle(
        this.x + (Math.random() - 0.5) * 4,
        this.y + (Math.random() - 0.5) * 4
      )
    );

    const distToPlayer = Math.hypot(player.x - this.x, player.y - this.y);
    if (distToPlayer <= player.radius + this.radius) {
      player.takeDamage(this.damage, dungeon, particles, cameraShake);
      this.destroy(particles);
      return;
    }

    if (
      this.x <= WALL_LEFT ||
      this.x >= WALL_RIGHT ||
      this.y <= WALL_TOP ||
      this.y >= WALL_BOTTOM ||
      this.life <= 0
    ) {
      this.destroy(particles);
    }
  }

  destroy(particles) {
    this.dead = true;
    for (let i = 0; i < 7; i++) {
      particles.push(
        new DarkAuraParticle(this.x, this.y, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4)
      );
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#4834d4';
    ctx.shadowColor = '#686de0';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#be2edd';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// =============================================================================
// ENEMIES: POOCHYENA, POOCHYENA SOMBRÍO, HOUNDOUR & HOUNDOUR ALFA
// =============================================================================
class Enemy {
  constructor(x, y, hp, speed, radius) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.hp = hp;
    this.maxHp = hp;
    this.speed = speed;
    this.radius = radius;
    this.dir = 0;
    this.state = 'walk';
    this.animTimer = 0;
    this.frameIndex = 0;
    this.dead = false;
    this.hitFlash = 0;
  }

  takeDamage(amount, particles) {
    this.hp -= amount;
    this.hitFlash = 10;
    sounds.playHit();
    particles.push(new DamageNumber(this.x, this.y - 20, amount));

    if (this.hp <= 0) {
      this.dead = true;
      for (let i = 0; i < 12; i++) {
        particles.push(
          new SmokeParticle(
            this.x + (Math.random() - 0.5) * 20,
            this.y + (Math.random() - 0.5) * 20
          )
        );
      }
    }
  }
}

// POOCHYENA (Melee Charger o Sombrío que dispara)
class Poochyena extends Enemy {
  constructor(x, y, isShooter = false) {
    super(x, y, 14, 1.6, 18);
    this.isShooter = isShooter;
    this.chargeCooldown = 120 + Math.random() * 60;
    this.charging = false;
    this.chargeTimer = 0;
    this.chargeTargetX = 0;
    this.chargeTargetY = 0;
    this.shootCooldown = 90 + Math.random() * 60;
    this.scale = 2.2;
  }

  update(player, dungeon, projectiles, particles, cameraShake) {
    if (this.hitFlash > 0) this.hitFlash--;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy);

    // If Shooter: periodic Pulso Umbrío (Shadow Orb)
    if (this.isShooter) {
      this.shootCooldown--;
      if (this.shootCooldown <= 0 && dist > 70) {
        this.shootCooldown = 140 + Math.random() * 40;
        this.shootShadowOrb(player, projectiles, particles);
      }
    }

    if (this.charging) {
      this.chargeTimer--;
      this.state = 'attack';
      const cdx = this.chargeTargetX - this.x;
      const cdy = this.chargeTargetY - this.y;
      const cdist = Math.hypot(cdx, cdy);
      if (cdist > 10 && this.chargeTimer > 0) {
        this.vx = (cdx / cdist) * 3.8;
        this.vy = (cdy / cdist) * 3.8;
      } else {
        this.charging = false;
        this.chargeCooldown = 140;
        this.state = 'walk';
      }
      if (Math.random() < 0.4) {
        particles.push(new DarkAuraParticle(this.x + (Math.random() - 0.5) * 16, this.y + (Math.random() - 0.5) * 16));
      }
    } else {
      this.chargeCooldown--;
      if (this.chargeCooldown <= 0 && dist < 220) {
        this.charging = true;
        this.chargeTimer = 35;
        this.chargeTargetX = player.x;
        this.chargeTargetY = player.y;
        sounds.playBite();
      } else {
        if (dist > 5) {
          this.vx = (dx / dist) * this.speed;
          this.vy = (dy / dist) * this.speed;
        }
        this.state = 'walk';
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < WALL_LEFT + this.radius) this.x = WALL_LEFT + this.radius;
    if (this.x > WALL_RIGHT - this.radius) this.x = WALL_RIGHT - this.radius;
    if (this.y < WALL_TOP + this.radius) this.y = WALL_TOP + this.radius;
    if (this.y > WALL_BOTTOM - this.radius) this.y = WALL_BOTTOM - this.radius;

    const curRoom = dungeon.getCurrentRoom();
    if (curRoom && curRoom.bgType === 'river') {
      applyRiverCollision(this);
    }

    this.dir = vectorToDirection(this.vx, this.vy, this.dir);

    if (dist < this.radius + player.radius) {
      player.takeDamage(1, dungeon, particles, cameraShake);
      player.vx = (dx / (dist || 1)) * 5;
      player.vy = (dy / (dist || 1)) * 5;
    }

    this.animTimer++;
    const animConfig = this.state === 'attack' ? assets.poochyena.attack : assets.poochyena.walk;
    const ticksPerFrame = this.charging ? 4 : 7;
    if (this.animTimer >= ticksPerFrame) {
      this.animTimer = 0;
      this.frameIndex = (this.frameIndex + 1) % animConfig.frames;
    }
  }

  shootShadowOrb(player, projectiles, particles) {
    sounds.playShadowOrb();
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy) || 1;
    const speed = 3.6;
    projectiles.push(new ShadowOrb(this.x, this.y - 4, (dx / dist) * speed, (dy / dist) * speed, 1));
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 14, 15, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const anim = this.state === 'attack' ? assets.poochyena.attack : assets.poochyena.walk;
    const frameW = anim.w;
    const frameH = anim.h;
    const col = this.frameIndex % anim.frames;
    const row = this.dir;

    const destW = frameW * this.scale;
    const destH = frameH * this.scale;
    const drawX = Math.round(this.x - destW / 2);
    const drawY = Math.round(this.y - destH / 2);

    ctx.save();
    if (this.hitFlash > 0) {
      ctx.filter = 'brightness(2.5) contrast(1.5)';
    } else if (this.isShooter) {
      // Dark shadowy purple aura for shooting variant
      ctx.filter = 'hue-rotate(240deg) saturate(1.4)';
    }
    ctx.drawImage(anim.img, col * frameW, row * frameH, frameW, frameH, drawX, drawY, destW, destH);
    ctx.restore();

    this.drawHpBar(ctx);
  }

  drawHpBar(ctx) {
    const barW = 32;
    const barH = 4;
    const bx = this.x - barW / 2;
    const by = this.y - 32;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(bx, by, barW, barH);
    const pct = Math.max(0, this.hp / this.maxHp);
    ctx.fillStyle = this.isShooter ? '#9b59b6' : '#ff4d4d';
    ctx.fillRect(bx, by, barW * pct, barH);
  }
}

// HOUNDOUR (Tirador de Ascuas o Alfa)
class Houndour extends Enemy {
  constructor(x, y, isAlpha = false) {
    super(x, y, isAlpha ? 32 : 12, isAlpha ? 1.3 : 1.5, isAlpha ? 26 : 17);
    this.isAlpha = isAlpha;
    this.shootCooldown = 90 + Math.random() * 60;
    this.scale = isAlpha ? 2.9 : 2.3;
    this.attackAnimTimer = 0;
  }

  update(player, dungeon, projectiles, particles, cameraShake) {
    if (this.hitFlash > 0) this.hitFlash--;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy);

    const desiredDist = this.isAlpha ? 230 : 200;
    if (dist < desiredDist - 40) {
      this.vx = -(dx / dist) * this.speed * 1.1;
      this.vy = -(dy / dist) * this.speed * 1.1;
    } else if (dist > desiredDist + 50) {
      this.vx = (dx / dist) * this.speed;
      this.vy = (dy / dist) * this.speed;
    } else {
      const perpX = -dy / dist;
      const perpY = dx / dist;
      this.vx = perpX * this.speed * 0.8;
      this.vy = perpY * this.speed * 0.8;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < WALL_LEFT + this.radius) this.x = WALL_LEFT + this.radius;
    if (this.x > WALL_RIGHT - this.radius) this.x = WALL_RIGHT - this.radius;
    if (this.y < WALL_TOP + this.radius) this.y = WALL_TOP + this.radius;
    if (this.y > WALL_BOTTOM - this.radius) this.y = WALL_BOTTOM - this.radius;

    const curRoom = dungeon.getCurrentRoom();
    if (curRoom && curRoom.bgType === 'river') {
      applyRiverCollision(this);
    }

    this.dir = vectorToDirection(dx, dy, this.dir);

    this.shootCooldown--;
    if (this.shootCooldown <= 0) {
      this.shootCooldown = this.isAlpha ? 110 : 135;
      this.shootEmber(player, projectiles, particles);
      this.attackAnimTimer = 20;
    }

    if (this.attackAnimTimer > 0) {
      this.attackAnimTimer--;
      this.state = 'attack';
    } else {
      this.state = 'walk';
    }

    if (dist < this.radius + player.radius) {
      player.takeDamage(this.isAlpha ? 2 : 1, dungeon, particles, cameraShake);
      player.vx = (dx / (dist || 1)) * 5;
      player.vy = (dy / (dist || 1)) * 5;
    }

    this.animTimer++;
    const animConfig = this.state === 'attack' ? assets.houndour.attack : assets.houndour.walk;
    if (this.animTimer >= 7) {
      this.animTimer = 0;
      this.frameIndex = (this.frameIndex + 1) % animConfig.frames;
    }
  }

  shootEmber(player, projectiles, particles) {
    sounds.playEmber();
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const angle = Math.atan2(dy, dx);

    if (this.isAlpha) {
      // Alpha Houndour: Shoots 1 Mega Ascua (explosive) + 2 side embers!
      const speed = 3.6;
      projectiles.push(new EmberBullet(this.x, this.y - 4, Math.cos(angle) * speed, Math.sin(angle) * speed, 2, true));
      projectiles.push(new EmberBullet(this.x, this.y - 4, Math.cos(angle - 0.25) * speed * 0.9, Math.sin(angle - 0.25) * speed * 0.9, 1, false));
      projectiles.push(new EmberBullet(this.x, this.y - 4, Math.cos(angle + 0.25) * speed * 0.9, Math.sin(angle + 0.25) * speed * 0.9, 1, false));
    } else {
      // Standard Houndour: 2 spread embers
      const speed = 3.2;
      for (let spread of [-0.14, 0.14]) {
        const vx = Math.cos(angle + spread) * speed;
        const vy = Math.sin(angle + spread) * speed;
        projectiles.push(new EmberBullet(this.x, this.y - 4, vx, vy, 1, false));
      }
    }

    for (let i = 0; i < 8; i++) {
      particles.push(
        new FireParticle(
          this.x + Math.cos(angle) * 16,
          this.y - 4 + Math.sin(angle) * 16,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3
        )
      );
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + (this.isAlpha ? 20 : 14), this.isAlpha ? 24 : 15, this.isAlpha ? 10 : 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const anim = this.state === 'attack' ? assets.houndour.attack : assets.houndour.walk;
    const frameW = anim.w;
    const frameH = anim.h;
    const col = this.frameIndex % anim.frames;
    const row = this.dir;

    const destW = frameW * this.scale;
    const destH = frameH * this.scale;
    const drawX = Math.round(this.x - destW / 2);
    const drawY = Math.round(this.y - destH / 2);

    ctx.save();
    if (this.hitFlash > 0) {
      ctx.filter = 'brightness(2.5) contrast(1.5)';
    } else if (this.isAlpha) {
      // Dark red fiery glow for Alpha
      ctx.shadowColor = '#ff3300';
      ctx.shadowBlur = 12;
    }
    ctx.drawImage(anim.img, col * frameW, row * frameH, frameW, frameH, drawX, drawY, destW, destH);
    ctx.restore();

    this.drawHpBar(ctx);
  }

  drawHpBar(ctx) {
    const barW = this.isAlpha ? 48 : 32;
    const barH = this.isAlpha ? 5 : 4;
    const bx = this.x - barW / 2;
    const by = this.y - (this.isAlpha ? 42 : 30);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(bx, by, barW, barH);
    const pct = Math.max(0, this.hp / this.maxHp);
    ctx.fillStyle = this.isAlpha ? '#e74c3c' : '#ff8833';
    ctx.fillRect(bx, by, barW * pct, barH);
  }
}

// =============================================================================
// ITEMS & PEDESTALS
// =============================================================================
class ItemPedestal {
  constructor(x, y, itemId) {
    this.x = x;
    this.y = y;
    this.itemId = itemId;
    this.collected = false;
    this.radius = 28;
    this.auraTimer = 0;
  }

  update(player, particles) {
    if (this.collected) return;
    this.auraTimer++;

    const dist = Math.hypot(player.x - this.x, player.y - this.y);
    if (dist <= this.radius + player.radius) {
      this.collected = true;
      sounds.playItemPickup();

      if (this.itemId === 'rocky_helmet') {
        player.hasRockyHelmet = true;
        player.pickupCelebrationTimer = 75;

        const banner = document.getElementById('item-banner');
        banner.classList.add('show');
        setTimeout(() => banner.classList.remove('show'), 3500);

        document.getElementById('helmet-badge').style.display = 'flex';

        for (let i = 0; i < 25; i++) {
          particles.push(
            new SparkleParticle(
              this.x + (Math.random() - 0.5) * 40,
              this.y + (Math.random() - 0.5) * 40,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4 - 2
            )
          );
        }
      }
    }
  }

  draw(ctx) {
    if (!this.collected && this.itemId === 'rocky_helmet') {
      ctx.save();
      const bob = Math.sin(this.auraTimer / 20) * 5;
      ctx.shadowColor = '#ffde59';
      ctx.shadowBlur = 15;

      const img = assets.items.rocky_helmet.img;
      const size = 52;
      ctx.drawImage(img, 0, 0, 160, 160, this.x - size / 2, this.y - size / 2 + bob, size, size);
      ctx.restore();
    }
  }
}

// =============================================================================
// DUNGEON & ROOMS
// =============================================================================
class Room {
  constructor(gx, gy, name, bgType, type) {
    this.gx = gx;
    this.gy = gy;
    this.name = name;
    this.bgType = bgType;
    this.type = type;
    this.visited = false;
    this.cleared = (type === 'start' || type === 'treasure');

    this.enemies = [];
    this.pedestals = [];
    this.drops = [];
    this.doors = { top: false, bottom: false, left: false, right: false };
  }
}

class Dungeon {
  constructor() {
    this.rooms = new Map();
    this.currentGx = 0;
    this.currentGy = 0;

    this.transitioning = false;
    this.transProgress = 0;
    this.transFromGx = 0;
    this.transFromGy = 0;
    this.transDir = '';

    this.initLayout();
  }

  key(gx, gy) {
    return `${gx},${gy}`;
  }

  initLayout() {
    // 1. Sala Inicial (0, 0)
    const rStart = new Room(0, 0, 'Sala Inicial', 'normal', 'start');
    rStart.visited = true;

    // 2. Cascada del Río (0, 1) [North] - Multiple shooting enemies across river!
    const rNorth = new Room(0, 1, 'Cascada del Río', 'river', 'combat');
    // Left bank: Melee Poochyena guarding
    rNorth.enemies.push(new Poochyena(240, 200, false));
    rNorth.enemies.push(new Poochyena(240, 440, false));
    // Right bank: 3 Houndour shooters firing across the water!
    rNorth.enemies.push(new Houndour(720, 180, false));
    rNorth.enemies.push(new Houndour(720, 330, false));
    rNorth.enemies.push(new Houndour(720, 480, false));

    // 3. Santuario del Casco (0, -1) [South]
    const rSouth = new Room(0, -1, 'Santuario del Casco', 'treasure', 'treasure');
    rSouth.pedestals.push(new ItemPedestal(MID_X, MID_Y - 8, 'rocky_helmet'));

    // 4. Guarida Poochyena (1, 0) [East] - Melee + Dark Orb Spitters!
    const rEast = new Room(1, 0, 'Guarida Poochyena', 'normal', 'combat');
    rEast.enemies.push(new Poochyena(260, 220, false));
    rEast.enemies.push(new Poochyena(700, 220, false));
    // 2 Dark Spitters shooting shadow pulses from the back!
    rEast.enemies.push(new Poochyena(260, 440, true));
    rEast.enemies.push(new Poochyena(700, 440, true));
    rEast.enemies.push(new Houndour(MID_X, 190, false));

    // 5. Nido Alfa (1, 1) [North-East] - Mini-Boss Alfa Houndour + Support!
    const rBoss = new Room(1, 1, 'Nido Alfa', 'normal', 'combat');
    // Mini-Boss Alfa Houndour
    rBoss.enemies.push(new Houndour(MID_X, 240, true));
    // Support Shooters
    rBoss.enemies.push(new Houndour(280, 200, false));
    rBoss.enemies.push(new Houndour(680, 200, false));
    rBoss.enemies.push(new Poochyena(280, 420, true));
    rBoss.enemies.push(new Poochyena(680, 420, false));

    this.rooms.set(this.key(0, 0), rStart);
    this.rooms.set(this.key(0, 1), rNorth);
    this.rooms.set(this.key(0, -1), rSouth);
    this.rooms.set(this.key(1, 0), rEast);
    this.rooms.set(this.key(1, 1), rBoss);

    this.rooms.forEach(room => {
      room.doors.top = this.rooms.has(this.key(room.gx, room.gy + 1));
      room.doors.bottom = this.rooms.has(this.key(room.gx, room.gy - 1));
      room.doors.left = this.rooms.has(this.key(room.gx - 1, room.gy));
      room.doors.right = this.rooms.has(this.key(room.gx + 1, room.gy));
    });
  }

  getCurrentRoom() {
    return this.rooms.get(this.key(this.currentGx, this.currentGy));
  }

  update(player, projectiles, enemyProjectiles, particles, cameraShake) {
    if (this.transitioning) {
      this.transProgress += 0.06;
      if (this.transProgress >= 1) {
        this.transProgress = 1;
        this.transitioning = false;
        const curRoom = this.getCurrentRoom();
        curRoom.visited = true;
        document.getElementById('room-name-display').innerText = curRoom.name;
      }
      return;
    }

    const curRoom = this.getCurrentRoom();
    if (!curRoom) return;

    if (!curRoom.cleared) {
      if (curRoom.enemies.length === 0) {
        curRoom.cleared = true;
        sounds.playRoomClear();
        sounds.playDoorOpen();
        curRoom.drops.push({
          x: MID_X,
          y: MID_Y,
          type: 'oran_berry',
          radius: 12
        });

        let allCleared = true;
        this.rooms.forEach(r => {
          if (!r.cleared) allCleared = false;
        });
        if (allCleared) {
          setTimeout(() => {
            document.getElementById('victory-screen').classList.remove('hidden');
          }, 1200);
        }
      }
    }

    for (let i = curRoom.enemies.length - 1; i >= 0; i--) {
      const enemy = curRoom.enemies[i];
      enemy.update(player, this, enemyProjectiles, particles, cameraShake);
      if (enemy.dead) {
        curRoom.enemies.splice(i, 1);
      }
    }

    curRoom.pedestals.forEach(p => p.update(player, particles));

    for (let i = curRoom.drops.length - 1; i >= 0; i--) {
      const drop = curRoom.drops[i];
      const dist = Math.hypot(player.x - drop.x, player.y - drop.y);
      if (dist < player.radius + drop.radius) {
        if (drop.type === 'oran_berry') {
          player.hp = Math.min(player.maxHp, player.hp + 2);
          sounds.playItemPickup();
          for (let p = 0; p < 8; p++) {
            particles.push(
              new SparkleParticle(drop.x, drop.y, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4)
            );
          }
          curRoom.drops.splice(i, 1);
        }
      }
    }
  }

  startTransition(toGx, toGy, dir, player) {
    if (this.transitioning) return;
    this.transitioning = true;
    this.transProgress = 0;
    this.transFromGx = this.currentGx;
    this.transFromGy = this.currentGy;
    this.transDir = dir;
    this.currentGx = toGx;
    this.currentGy = toGy;

    sounds.playDoorOpen();

    if (dir === 'top') {
      player.x = MID_X;
      player.y = WALL_BOTTOM - 25;
    } else if (dir === 'bottom') {
      player.x = MID_X;
      player.y = WALL_TOP + 25;
    } else if (dir === 'left') {
      player.x = WALL_RIGHT - 25;
      player.y = MID_Y;
    } else if (dir === 'right') {
      player.x = WALL_LEFT + 25;
      player.y = MID_Y;
    }
  }

  draw(ctx) {
    if (this.transitioning) {
      ctx.save();
      let offsetX = 0;
      let offsetY = 0;
      const p = this.transProgress;
      if (this.transDir === 'top') offsetY = p * CANVAS_H;
      if (this.transDir === 'bottom') offsetY = -p * CANVAS_H;
      if (this.transDir === 'left') offsetX = p * CANVAS_W;
      if (this.transDir === 'right') offsetX = -p * CANVAS_W;

      ctx.save();
      ctx.translate(offsetX - (this.transDir === 'left' ? CANVAS_W : this.transDir === 'right' ? -CANVAS_W : 0),
                    offsetY - (this.transDir === 'top' ? CANVAS_H : this.transDir === 'bottom' ? -CANVAS_H : 0));
      this.drawRoom(ctx, this.rooms.get(this.key(this.transFromGx, this.transFromGy)));
      ctx.restore();

      ctx.save();
      ctx.translate(offsetX, offsetY);
      this.drawRoom(ctx, this.getCurrentRoom());
      ctx.restore();

      ctx.restore();
    } else {
      this.drawRoom(ctx, this.getCurrentRoom());
    }
  }

  drawRoom(ctx, room) {
    if (!room) return;

    let bgImg = assets.rooms.normal.img;
    if (room.bgType === 'river') bgImg = assets.rooms.river.img;
    if (room.bgType === 'treasure') bgImg = assets.rooms.treasure.img;

    if (bgImg && bgImg.complete && bgImg.naturalWidth > 0) {
      ctx.drawImage(bgImg, 0, 0, CANVAS_W, CANVAS_H);
    } else {
      ctx.fillStyle = room.bgType === 'treasure' ? '#2c1e30' : '#1e241e';
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    }

    // DRAW INTEGRATED STONE ARCHWAY DOORS & WALL BLOCKADES
    this.drawDoors(ctx, room);

    // Pedestals
    room.pedestals.forEach(p => p.draw(ctx));

    // Drops
    room.drops.forEach(drop => {
      ctx.save();
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.beginPath();
      ctx.ellipse(drop.x, drop.y + 6, 8, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#2d78d6';
      ctx.beginPath();
      ctx.arc(drop.x, drop.y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#44bd32';
      ctx.fillRect(drop.x - 2, drop.y - 10, 4, 4);
      ctx.restore();
    });

    // Enemies
    room.enemies.forEach(e => e.draw(ctx));
  }

  drawDoors(ctx, room) {
    const isLocked = !room.cleared;

    // 1. TOP DOOR (North)
    if (room.doors.top) {
      this.drawCarvedArchway(ctx, MID_X - DOOR_WIDTH / 2, WALL_TOP - 45, DOOR_WIDTH, 50, 'top', isLocked);
    }

    // 2. LEFT DOOR (West)
    if (room.doors.left) {
      this.drawCarvedArchway(ctx, WALL_LEFT - 45, MID_Y - DOOR_WIDTH / 2, 50, DOOR_WIDTH, 'left', isLocked);
    }

    // 3. RIGHT DOOR (East)
    if (room.doors.right) {
      this.drawCarvedArchway(ctx, WALL_RIGHT - 5, MID_Y - DOOR_WIDTH / 2, 50, DOOR_WIDTH, 'right', isLocked);
    }

    // 4. BOTTOM DOOR (South)
    if (room.doors.bottom) {
      // Flanking stone pillars on the bottom path + gate if locked
      this.drawBottomPathGate(ctx, MID_X - DOOR_WIDTH / 2, WALL_BOTTOM - 10, DOOR_WIDTH, 40, isLocked);
    } else {
      // IF NO SOUTH DOOR: Draw a stone & bush barricade closing off the bottom path!
      this.drawBottomWallBlockade(ctx, MID_X - DOOR_WIDTH / 2 - 10, WALL_BOTTOM - 5, DOOR_WIDTH + 20, 45);
    }
  }

  // Authentic carved stone archway that integrates with the pixel-art wall palette
  drawCarvedArchway(ctx, x, y, w, h, dir, isLocked) {
    ctx.save();

    // Dark interior passage void into the next room
    ctx.fillStyle = '#0a0812';
    ctx.fillRect(x, y, w, h);

    // Stone columns & lintel colors matching the mossy rock walls
    const stoneBase = '#3a342b';
    const stoneHighlight = '#564d40';
    const stoneShadow = '#211d17';
    const mossColor = '#556839';

    if (dir === 'top') {
      // Stone Lintel Above
      ctx.fillStyle = stoneBase;
      ctx.fillRect(x - 14, y - 10, w + 28, 14);
      ctx.fillStyle = stoneHighlight;
      ctx.fillRect(x - 14, y - 10, w + 28, 3);
      ctx.fillStyle = stoneShadow;
      ctx.fillRect(x - 14, y + 1, w + 28, 3);

      // Left Pillar
      ctx.fillStyle = stoneBase;
      ctx.fillRect(x - 14, y + 4, 14, h + 8);
      ctx.fillStyle = stoneHighlight;
      ctx.fillRect(x - 14, y + 4, 3, h + 8);

      // Right Pillar
      ctx.fillStyle = stoneBase;
      ctx.fillRect(x + w, y + 4, 14, h + 8);
      ctx.fillStyle = stoneShadow;
      ctx.fillRect(x + w + 11, y + 4, 3, h + 8);

      // Moss tufts
      ctx.fillStyle = mossColor;
      ctx.fillRect(x - 10, y - 8, 12, 4);
      ctx.fillRect(x + w - 4, y - 8, 12, 4);
    } else if (dir === 'left') {
      // Arch framing the left rock wall
      ctx.fillStyle = stoneBase;
      ctx.fillRect(x - 8, y - 12, w + 8, 12); // Top lintel
      ctx.fillRect(x - 8, y + h, w + 8, 12);  // Bottom sill
      ctx.fillRect(x - 10, y - 12, 10, h + 24); // Back stone
      ctx.fillStyle = stoneHighlight;
      ctx.fillRect(x - 8, y - 12, w + 8, 3);
      ctx.fillStyle = mossColor;
      ctx.fillRect(x - 6, y - 10, 10, 4);
    } else if (dir === 'right') {
      // Arch framing the right rock wall
      ctx.fillStyle = stoneBase;
      ctx.fillRect(x, y - 12, w + 8, 12);
      ctx.fillRect(x, y + h, w + 8, 12);
      ctx.fillRect(x + w, y - 12, 10, h + 24);
      ctx.fillStyle = stoneHighlight;
      ctx.fillRect(x, y - 12, w + 8, 3);
      ctx.fillStyle = mossColor;
      ctx.fillRect(x + 4, y - 10, 10, 4);
    }

    // IF LOCKED: Heavy iron portcullis with spiked red bars & padlock
    if (isLocked) {
      // Iron bars
      ctx.fillStyle = '#222026';
      ctx.strokeStyle = '#c0392b';
      ctx.lineWidth = 2;

      const step = 14;
      if (dir === 'top') {
        for (let bx = x + 8; bx < x + w - 4; bx += step) {
          ctx.fillRect(bx, y, 5, h);
          // Red warning spikes at the bottom of the bars
          ctx.fillStyle = '#e74c3c';
          ctx.beginPath();
          ctx.moveTo(bx - 1, y + h - 1);
          ctx.lineTo(bx + 2.5, y + h + 8);
          ctx.lineTo(bx + 6, y + h - 1);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = '#222026';
        }
      } else {
        for (let by = y + 8; by < y + h - 4; by += step) {
          ctx.fillRect(x, by, w, 5);
          ctx.fillStyle = '#e74c3c';
          ctx.beginPath();
          ctx.moveTo(x + (dir === 'left' ? w : 0), by - 1);
          ctx.lineTo(x + (dir === 'left' ? w + 8 : -8), by + 2.5);
          ctx.lineTo(x + (dir === 'left' ? w : 0), by + 6);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = '#222026';
        }
      }

      // Golden Padlock in the center
      const padX = x + w / 2 - 8;
      const padY = y + h / 2 - 8;
      ctx.fillStyle = '#f1c40f';
      ctx.fillRect(padX, padY, 16, 16);
      ctx.strokeStyle = '#b7950b';
      ctx.strokeRect(padX, padY, 16, 16);
      ctx.fillStyle = '#000';
      ctx.fillRect(padX + 6, padY + 8, 4, 4);
    } else {
      // OPEN: Subtle emerald passage glow
      ctx.fillStyle = 'rgba(46, 204, 113, 0.15)';
      ctx.fillRect(x, y, w, h);
    }

    ctx.restore();
  }

  // Gate for the natural bottom pathway
  drawBottomPathGate(ctx, x, y, w, h, isLocked) {
    ctx.save();
    // Two flanking mossy stone pillars
    ctx.fillStyle = '#3a342b';
    ctx.fillRect(x - 14, y, 14, h + 15);
    ctx.fillRect(x + w, y, 14, h + 15);
    ctx.fillStyle = '#556839';
    ctx.fillRect(x - 12, y + 2, 8, 6);
    ctx.fillRect(x + w + 4, y + 2, 8, 6);

    if (isLocked) {
      // Iron spiked gate across the bottom path
      ctx.fillStyle = '#222026';
      for (let bx = x + 8; bx < x + w - 4; bx += 14) {
        ctx.fillRect(bx, y, 5, h);
        ctx.fillStyle = '#e74c3c';
        ctx.beginPath();
        ctx.moveTo(bx - 1, y);
        ctx.lineTo(bx + 2.5, y - 8);
        ctx.lineTo(bx + 6, y);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#222026';
      }
      // Horizontal crossbar & lock
      ctx.fillRect(x, y + h / 2 - 3, w, 6);
      ctx.fillStyle = '#f1c40f';
      ctx.fillRect(x + w / 2 - 8, y + h / 2 - 8, 16, 16);
    }
    ctx.restore();
  }

  // Stone & bush barricade closing the bottom path when there's NO South door
  drawBottomWallBlockade(ctx, x, y, w, h) {
    ctx.save();
    // Solid stone wall blocks
    ctx.fillStyle = '#352f27';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#201c17';
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);

    // Stone brick lines
    ctx.strokeStyle = '#4e4438';
    ctx.beginPath();
    ctx.moveTo(x, y + h / 2);
    ctx.lineTo(x + w, y + h / 2);
    ctx.moveTo(x + w / 3, y);
    ctx.lineTo(x + w / 3, y + h / 2);
    ctx.moveTo(x + (w * 2) / 3, y + h / 2);
    ctx.lineTo(x + (w * 2) / 3, y + h);
    ctx.stroke();

    // Moss and bushes covering the barricade
    ctx.fillStyle = '#44bd32';
    ctx.beginPath();
    ctx.arc(x + 15, y + 8, 14, 0, Math.PI * 2);
    ctx.arc(x + w / 2, y + 4, 18, 0, Math.PI * 2);
    ctx.arc(x + w - 15, y + 8, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// =============================================================================
// PARTICLES
// =============================================================================
class WaterParticle {
  constructor(x, y, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.life = 22 + Math.random() * 10;
    this.maxLife = this.life;
    this.radius = 2.5 + Math.random() * 2.5;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.94;
    this.vy *= 0.94;
    this.life--;
  }

  draw(ctx) {
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class FireParticle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy - 0.5;
    this.life = 20 + Math.random() * 10;
    this.maxLife = this.life;
    this.radius = 3 + Math.random() * 3;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.radius *= 0.95;
    this.life--;
  }

  draw(ctx) {
    const p = this.life / this.maxLife;
    ctx.save();
    ctx.fillStyle = p > 0.5 ? '#ffaa00' : '#ff3300';
    ctx.globalAlpha = p;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(1, this.radius), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class RockSpikeParticle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = 35 + Math.random() * 15;
    this.maxLife = this.life;
    this.size = 7 + Math.random() * 6;
    this.rot = Math.random() * Math.PI;
    this.rotSpeed = (Math.random() - 0.5) * 0.3;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.88;
    this.vy *= 0.88;
    this.rot += this.rotSpeed;
    this.life--;
  }

  draw(ctx) {
    const p = this.life / this.maxLife;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.fillStyle = '#8f8877';
    ctx.strokeStyle = '#47433b';
    ctx.lineWidth = 2;
    ctx.globalAlpha = Math.min(1, p * 1.5);
    ctx.beginPath();
    ctx.moveTo(-this.size / 2, -this.size / 2);
    ctx.lineTo(this.size / 2, -this.size / 3);
    ctx.lineTo(this.size * 0.7, this.size / 2);
    ctx.lineTo(-this.size / 3, this.size * 0.6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

class ShockwaveVisual {
  constructor(x, y, targetRadius) {
    this.x = x;
    this.y = y;
    this.targetRadius = targetRadius;
    this.currentRadius = 10;
    this.life = 25;
    this.maxLife = 25;
  }

  update() {
    this.currentRadius += (this.targetRadius - this.currentRadius) * 0.22;
    this.life--;
  }

  draw(ctx) {
    const p = this.life / this.maxLife;
    ctx.save();
    ctx.strokeStyle = '#e6c86e';
    ctx.shadowColor = '#d4aa3b';
    ctx.shadowBlur = 12;
    ctx.lineWidth = 5 * p;
    ctx.globalAlpha = p;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#a69279';
    ctx.lineWidth = 2 * p;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.currentRadius * 0.75, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

class BloodParticle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = 20;
    this.maxLife = 20;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.9;
    this.vy *= 0.9;
    this.life--;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#ff2222';
    ctx.globalAlpha = this.life / this.maxLife;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class SparkleParticle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = 30;
    this.maxLife = 30;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }

  draw(ctx) {
    const p = this.life / this.maxLife;
    ctx.save();
    ctx.fillStyle = '#fffa65';
    ctx.globalAlpha = p;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class SmokeParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5 - 0.5;
    this.life = 25;
    this.maxLife = 25;
    this.radius = 6 + Math.random() * 6;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += 0.3;
    this.life--;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#7f8c8d';
    ctx.globalAlpha = (this.life / this.maxLife) * 0.6;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class DarkAuraParticle {
  constructor(x, y, vx = 0, vy = 0) {
    this.x = x;
    this.y = y;
    this.vx = vx || (Math.random() - 0.5) * 2;
    this.vy = vy || (Math.random() - 0.5) * 2;
    this.life = 15;
    this.maxLife = 15;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#8e44ad';
    ctx.globalAlpha = this.life / this.maxLife;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class DamageNumber {
  constructor(x, y, amount) {
    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y;
    this.amount = amount;
    this.life = 35;
    this.maxLife = 35;
  }

  update() {
    this.y -= 0.8;
    this.life--;
  }

  draw(ctx) {
    ctx.save();
    ctx.font = '10px "Press Start 2P", monospace';
    ctx.fillStyle = this.amount >= 8 ? '#ffde59' : '#ff4d4d';
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 4;
    ctx.globalAlpha = Math.min(1, this.life / 20);
    ctx.fillText(`-${this.amount}`, this.x, this.y);
    ctx.restore();
  }
}

// =============================================================================
// MAIN GAME CONTROLLER
// =============================================================================
class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.minimapCanvas = document.getElementById('minimap-canvas');
    this.minimapCtx = this.minimapCanvas.getContext('2d');

    this.input = {
      keys: {},
      mouse: { x: 0, y: 0, down: false },
      touchMove: { active: false, dx: 0, dy: 0 },
      touchShoot: { active: false, dx: 0, dy: 0 }
    };

    this.player = null;
    this.dungeon = null;
    this.projectiles = [];
    this.enemyProjectiles = [];
    this.particles = [];

    this.shakeDuration = 0;
    this.shakeIntensity = 0;

    this.isGameOver = false;
    this.animFrameId = null;

    this.setupEventListeners();
  }

  init() {
    // CRITICAL FIX: Cancel any existing animation frame loop to prevent loops from stacking!
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    // Reset input states so character doesn't auto-move/shoot on retry
    this.input.keys = {};
    this.input.mouse.down = false;
    this.input.touchMove = { active: false, dx: 0, dy: 0 };
    this.input.touchShoot = { active: false, dx: 0, dy: 0 };

    this.player = new Player(MID_X, MID_Y);
    this.dungeon = new Dungeon();
    this.projectiles = [];
    this.enemyProjectiles = [];
    this.particles = [];
    this.shakeDuration = 0;
    this.shakeIntensity = 0;
    this.isGameOver = false;

    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('gameover-screen').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('helmet-badge').style.display = 'none';

    this.updateHealthBar();
    this.loop();
  }

  setupEventListeners() {
    window.addEventListener('keydown', e => {
      this.input.keys[e.code] = true;
      sounds.init();
    });

    window.addEventListener('keyup', e => {
      this.input.keys[e.code] = false;
    });

    this.canvas.addEventListener('mousemove', e => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = CANVAS_W / rect.width;
      const scaleY = CANVAS_H / rect.height;
      this.input.mouse.x = (e.clientX - rect.left) * scaleX;
      this.input.mouse.y = (e.clientY - rect.top) * scaleY;
    });

    this.canvas.addEventListener('mousedown', e => {
      if (e.button === 0) {
        this.input.mouse.down = true;
        sounds.init();
      }
    });

    window.addEventListener('mouseup', () => {
      this.input.mouse.down = false;
    });

    document.getElementById('btn-sound').addEventListener('click', () => {
      sounds.init();
      sounds.muted = !sounds.muted;
      document.getElementById('btn-sound').innerText = sounds.muted ? '🔇 Mudo' : '🔊 Sonido';
    });

    document.getElementById('btn-touch').addEventListener('click', () => {
      const touchDiv = document.getElementById('touch-controls');
      const isVisible = touchDiv.style.display === 'block';
      touchDiv.style.display = isVisible ? 'none' : 'block';
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
      this.init();
    });

    document.getElementById('btn-retry').addEventListener('click', () => {
      this.init();
    });

    document.getElementById('btn-play-again').addEventListener('click', () => {
      this.init();
    });

    this.setupTouchJoysticks();
  }

  setupTouchJoysticks() {
    const bindJoystick = (zoneId, knobId, targetObj) => {
      const zone = document.getElementById(zoneId);
      const knob = document.getElementById(knobId);
      let touchId = null;
      let startX = 0;
      let startY = 0;

      zone.addEventListener('touchstart', e => {
        sounds.init();
        if (touchId === null) {
          const t = e.changedTouches[0];
          touchId = t.identifier;
          const rect = zone.getBoundingClientRect();
          startX = rect.left + rect.width / 2;
          startY = rect.top + rect.height / 2;
          targetObj.active = true;
        }
      }, { passive: false });

      const onTouchMove = e => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          const t = e.changedTouches[i];
          if (t.identifier === touchId) {
            let dx = t.clientX - startX;
            let dy = t.clientY - startY;
            const dist = Math.hypot(dx, dy);
            const maxR = 40;
            if (dist > maxR) {
              dx = (dx / dist) * maxR;
              dy = (dy / dist) * maxR;
            }
            knob.style.transform = `translate(${dx}px, ${dy}px)`;
            targetObj.dx = dx / maxR;
            targetObj.dy = dy / maxR;
            targetObj.active = true;
          }
        }
      };

      const onTouchEnd = e => {
        for (let i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === touchId) {
            touchId = null;
            targetObj.active = false;
            targetObj.dx = 0;
            targetObj.dy = 0;
            knob.style.transform = 'translate(0px, 0px)';
          }
        }
      };

      zone.addEventListener('touchmove', onTouchMove, { passive: false });
      zone.addEventListener('touchend', onTouchEnd, { passive: false });
      zone.addEventListener('touchcancel', onTouchEnd, { passive: false });
    };

    bindJoystick('touch-move', 'knob-move', this.input.touchMove);
    bindJoystick('touch-shoot', 'knob-shoot', this.input.touchShoot);
  }

  triggerCameraShake(intensity) {
    this.shakeIntensity = intensity;
    this.shakeDuration = 12;
  }

  updateHealthBar() {
    const container = document.getElementById('health-bar');
    container.innerHTML = '';
    const totalHearts = this.player.maxHp / 2;
    for (let i = 0; i < totalHearts; i++) {
      const heartVal = this.player.hp - i * 2;
      const svg = document.createElement('div');
      svg.className = 'berry-heart';

      if (heartVal >= 2) {
        svg.innerHTML = `
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#3b99fc" stroke="#1d4d7a" stroke-width="2"/>
            <circle cx="12" cy="11" r="3" fill="#ffffff" opacity="0.4"/>
          </svg>`;
      } else if (heartVal === 1) {
        svg.innerHTML = `
          <svg viewBox="0 0 24 24" width="26" height="26">
            <defs>
              <clipPath id="half-clip"><rect x="0" y="0" width="12" height="24"/></clipPath>
            </defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#242130" stroke="#1d4d7a" stroke-width="2"/>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#3b99fc" clip-path="url(#half-clip)"/>
          </svg>`;
      } else {
        svg.innerHTML = `
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#242130" stroke="#524e66" stroke-width="2"/>
          </svg>`;
      }
      container.appendChild(svg);
    }
  }

  drawMinimap() {
    const ctx = this.minimapCtx;
    ctx.clearRect(0, 0, 100, 75);

    const roomW = 18;
    const roomH = 14;
    const originX = 50;
    const originY = 38;

    this.dungeon.rooms.forEach(r => {
      const rx = originX + r.gx * (roomW + 4) - roomW / 2;
      const ry = originY - r.gy * (roomH + 4) - roomH / 2;

      const isCurrent = r.gx === this.dungeon.currentGx && r.gy === this.dungeon.currentGy;

      if (r.visited || isCurrent) {
        ctx.fillStyle = r.type === 'treasure' ? '#ffd32a' : r.cleared ? '#4b6584' : '#eb3b5a';
        ctx.fillRect(rx, ry, roomW, roomH);

        ctx.strokeStyle = isCurrent ? '#ffffff' : '#1e272c';
        ctx.lineWidth = isCurrent ? 2 : 1;
        ctx.strokeRect(rx, ry, roomW, roomH);

        if (r.type === 'treasure') {
          ctx.fillStyle = '#1e1c27';
          ctx.font = '8px monospace';
          ctx.fillText('★', rx + 4, ry + 10);
        }
      } else {
        const cur = this.dungeon.getCurrentRoom();
        const isNeighbor = Math.abs(cur.gx - r.gx) + Math.abs(cur.gy - r.gy) === 1;
        if (isNeighbor) {
          ctx.strokeStyle = '#38324a';
          ctx.lineWidth = 1;
          ctx.strokeRect(rx, ry, roomW, roomH);
        }
      }
    });
  }

  update() {
    if (this.isGameOver) return;

    if (this.player.hp <= 0) {
      this.isGameOver = true;
      document.getElementById('gameover-screen').classList.remove('hidden');
      return;
    }

    const shakeCallback = intensity => this.triggerCameraShake(intensity);
    const doorCallback = dir => {
      const cur = this.dungeon.getCurrentRoom();
      if (!cur) return;
      if (dir === 'top') this.dungeon.startTransition(cur.gx, cur.gy + 1, 'top', this.player);
      if (dir === 'bottom') this.dungeon.startTransition(cur.gx, cur.gy - 1, 'bottom', this.player);
      if (dir === 'left') this.dungeon.startTransition(cur.gx - 1, cur.gy, 'left', this.player);
      if (dir === 'right') this.dungeon.startTransition(cur.gx + 1, cur.gy, 'right', this.player);
    };

    this.player.update(
      this.input,
      this.dungeon,
      this.projectiles,
      this.particles,
      doorCallback
    );

    this.dungeon.update(
      this.player,
      this.projectiles,
      this.enemyProjectiles,
      this.particles,
      shakeCallback
    );

    const curRoom = this.dungeon.getCurrentRoom();
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.update(this.particles);

      if (curRoom) {
        for (let j = 0; j < curRoom.enemies.length; j++) {
          const enemy = curRoom.enemies[j];
          const dist = Math.hypot(p.x - enemy.x, p.y - enemy.y);
          if (dist <= p.radius + enemy.radius) {
            enemy.takeDamage(p.damage, this.particles);
            enemy.vx += p.vx * 0.25;
            enemy.vy += p.vy * 0.25;
            p.destroy(this.particles);
            break;
          }
        }
      }

      if (p.dead) {
        this.projectiles.splice(i, 1);
      }
    }

    for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
      const ep = this.enemyProjectiles[i];
      ep.update(this.player, this.particles, this.dungeon, shakeCallback, this.enemyProjectiles);
      if (ep.dead) {
        this.enemyProjectiles.splice(i, 1);
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.update();
      if (pt.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    if (this.shakeDuration > 0) {
      this.shakeDuration--;
    } else {
      this.shakeIntensity = 0;
    }

    this.updateHealthBar();
    this.drawMinimap();
  }

  draw() {
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    this.ctx.save();
    if (this.shakeDuration > 0 && this.shakeIntensity > 0) {
      const sx = (Math.random() - 0.5) * this.shakeIntensity;
      const sy = (Math.random() - 0.5) * this.shakeIntensity;
      this.ctx.translate(sx, sy);
    }

    this.dungeon.draw(this.ctx);

    this.particles.forEach(p => {
      if (p instanceof ShockwaveVisual) p.draw(this.ctx);
    });

    this.player.draw(this.ctx);

    this.projectiles.forEach(p => p.draw(this.ctx));
    this.enemyProjectiles.forEach(p => p.draw(this.ctx));

    this.particles.forEach(p => {
      if (!(p instanceof ShockwaveVisual)) p.draw(this.ctx);
    });

    this.ctx.restore();
  }

  loop() {
    this.update();
    this.draw();
    this.animFrameId = requestAnimationFrame(() => this.loop());
  }
}

// Start game
window.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  initAssetLoading(() => {
    game.init();
  });
});
