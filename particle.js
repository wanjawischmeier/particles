class Particle {
  constructor(mode) {
    fill(0);
    this.speed = 1;
    this.size = 10;
    this.pos = createVector(random(width), random(height));
    this.dir = createVector(random(-this.speed, this.speed), random(-this.speed, this.speed));
    
    this.mode = mode;
  }
  
  update() {
    this.move();
  }
  
  move() {
    if (this.touchesWall() == 1) {
      this.dir.x = -this.dir.x;
    } else if (this.touchesWall() == 2) {
      this.dir.y = -this.dir.y;
    }
    this.pos.x += this.dir.x;
    this.pos.y += this.dir.y;
  }
  
  show() {
    fill(modes.properties[this.mode].color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  touchesWall() {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      return 1;
    } else if (this.pos.y <= 0 || this.pos.y >= height) {
      return 2;
    } else {
      return 0;
    }
  }
}