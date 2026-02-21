// ui/Renderer.js
export default class Renderer {
  constructor(playerEl, enemyEls, arenaEl) {
    this.playerEl = playerEl;
    this.enemyEls = enemyEls; // array of DOM elements
    this.arenaEl = arenaEl;
  }

  update(player, enemies) {
    const w = this.arenaEl.clientWidth;

    // Player
    const pxP = (player.position / 100) * w;
    this.playerEl.style.transform = `translate(${pxP}px, -50%)`;

    // Enemies
    enemies.forEach((enemy, i) => {
      const pxE = (enemy.position / 100) * w;
      this.enemyEls[i].style.transform = `translate(${pxE}px, -50%)`;
      this.enemyEls[i].style.rotate = `${(Math.random() - 0.5) * (100 - enemy.stability) * 0.05}deg`;
    });
  }
}
