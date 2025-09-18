let particles = [];
let modes;

function setup() {
  createCanvas(400, 400);
  
  modes = {
    NORMAL: 1,
    INFECTED: 2,

    properties: {
      1: {color: color(0, 0, 0)},
      2: {color: color(200, 100, 100)}
    }
  };
  
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(modes.NORMAL));
  }
  particles[0].mode = modes.INFECTED;
}

function draw() {
  background(255);
  
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].mode == modes.INFECTED) {
      let touchedParticle = touchesParticle(particles[i]);
      if (touchedParticle != -1) {
        particles[touchedParticle].mode = modes.INFECTED;
        fill(100, 200, 100);
      }
    }
    particles[i].update();
    particles[i].show();
  }
}

function touchesParticle(particle) {
  let touched = -1;
  for (let i = 0; i < particles.length; i++) {
    if (dist(particle.pos.x, particle.pos.y, particles[i].pos.x, particles[i].pos.y) < particle.size && particles[i] != particle) {
      touched = i;
    }
  }
  return touched;
}

