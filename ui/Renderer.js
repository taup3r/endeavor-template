// ui/Renderer.js
export default class Renderer {
  constructor(playerEl, enemyEl, arenaEl) {
    this.playerEl = playerEl;
    this.enemyEl = enemyEl;
    this.arenaEl = arenaEl;
  }

  update(player, enemy) {
    const w = this.arenaEl.clientWidth;

    const pxP = (player.position / 100) * w;
    const pxE = (enemy.position / 100) * w;

    this.playerEl.style.transform = `translate(${pxP}px, -50%)`;
    this.enemyEl.style.transform = `translate(${pxE}px, -50%)`;

    this.playerEl.style.rotate = `${(Math.random() - 0.5) * (100 - player.stability) * 0.05}deg`;
    this.enemyEl.style.rotate = `${(Math.random() - 0.5) * (100 - enemy.stability) * 0.05}deg`;
  }
}
