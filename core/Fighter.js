// core/Fighter.js
export default class Fighter {
  constructor(name, startPos) {
    this.name = name;
    this.stability = 100;
    this.morale = 100;
    this.momentum = 0;
    this.position = startPos; // 0–100
  }

  applyForce(amount, direction) {
    this.momentum += amount * direction;
    this.position += amount * direction * 0.4;
    this.position = Math.max(0, Math.min(100, this.position));
    this.stability -= amount * 0.5;
  }

  applyPressure(amount) {
    this.morale -= amount;
    this.stability -= amount * 0.3;
  }

  applyTrip(amount) {
    this.stability -= amount;
  }

  decay() {
    this.momentum *= 0.85;
  }

  isDefeated() {
    return this.stability <= 0 || this.morale <= 0;
  }
}
