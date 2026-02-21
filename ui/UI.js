// ui/UI.js
export default class UI {
  constructor() {
    this.status = document.getElementById("status");

    this.buttons = {
      push: document.getElementById("btnPush"),
      feint: document.getElementById("btnFeint"),
      trip: document.getElementById("btnTrip")
    };

    this.playerBars = {
      stab: document.getElementById("pStab"),
      mor: document.getElementById("pMor"),
      mom: document.getElementById("pMom")
    };

    this.enemyBars = [
      {
        stab: document.getElementById("e1Stab"),
        mor: document.getElementById("e1Mor"),
        mom: document.getElementById("e1Mom")
      },
      {
        stab: document.getElementById("e2Stab"),
        mor: document.getElementById("e2Mor"),
        mom: document.getElementById("e2Mom")
      }
    ];
  }

  updateBars(player, enemies) {
    const clamp = v => Math.max(0, Math.min(100, v));

    // Player
    this.playerBars.stab.style.width = clamp(player.stability) + "%";
    this.playerBars.mor.style.width = clamp(player.morale) + "%";
    this.playerBars.mom.style.width = clamp(Math.abs(player.momentum)) + "%";

    // Enemies
    enemies.forEach((enemy, i) => {
      const bars = this.enemyBars[i];
      bars.stab.style.width = clamp(enemy.stability) + "%";
      bars.mor.style.width = clamp(enemy.morale) + "%";
      bars.mom.style.width = clamp(Math.abs(enemy.momentum)) + "%";
    });
  }

  setStatus(text) {
    this.status.textContent = text;
  }

  enableActions(enabled) {
    Object.values(this.buttons).forEach(btn => btn.disabled = !enabled);
  }
}
