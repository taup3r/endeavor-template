// ui/UI.js
export default class UI {
  constructor() {
    this.status = document.getElementById("status");
    this.buttons = {
      push: document.getElementById("btnPush"),
      feint: document.getElementById("btnFeint"),
      trip: document.getElementById("btnTrip")
    };

    this.bars = {
      pStab: document.getElementById("pStab"),
      pMor: document.getElementById("pMor"),
      pMom: document.getElementById("pMom"),
      eStab: document.getElementById("eStab"),
      eMor: document.getElementById("eMor"),
      eMom: document.getElementById("eMom")
    };
  }

  setStatus(text) {
    this.status.textContent = text;
  }

  enableActions(enabled) {
    Object.values(this.buttons).forEach(btn => btn.disabled = !enabled);
  }

  updateBars(player, enemy) {
    const clamp = v => Math.max(0, Math.min(100, v));

    this.bars.pStab.style.width = clamp(player.stability) + "%";
    this.bars.pMor.style.width = clamp(player.morale) + "%";
    this.bars.pMom.style.width = clamp(Math.abs(player.momentum)) + "%";

    this.bars.eStab.style.width = clamp(enemy.stability) + "%";
    this.bars.eMor.style.width = clamp(enemy.morale) + "%";
    this.bars.eMom.style.width = clamp(Math.abs(enemy.momentum)) + "%";
  }
}
