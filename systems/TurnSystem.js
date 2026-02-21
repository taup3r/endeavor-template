// systems/TurnSystem.js
import { Actions } from "../core/Actions.js";
import { enemyAct } from "../core/AI.js";

export default class TurnSystem {
  constructor(player, enemies, ui, renderer, log) {
    this.player = player;
    this.enemies = enemies; // array
    this.ui = ui;
    this.renderer = renderer;
    this.log = log;
    this.playerTurn = true;
  }

  playerAction(type, targetIndex = 0) {
    const target = this.enemies[targetIndex];
    const result = Actions[type]("player", target);
    this.log.add(`You: ${result}`);

    this.endPhase();
    if (!this.checkEnd()) this.enemyTurn();
  }

  enemyTurn() {
    this.playerTurn = false;
    this.ui.setStatus("Enemies are acting…");
    this.ui.enableActions(false);

    let i = 0;

    const nextEnemy = () => {
      if (i >= this.enemies.length) {
        this.playerTurn = true;
        this.ui.setStatus("Your turn");
        this.ui.enableActions(true);
        return;
      }

      const enemy = this.enemies[i];
      if (!enemy.isDefeated()) {
        const { action, result } = enemyAct(this.player, enemy);
        this.log.add(`${enemy.name}: ${result}`);
      }

      this.endPhase();
      if (this.checkEnd()) return;

      i++;
      setTimeout(nextEnemy, 500);
    };

    nextEnemy();
  }

  endPhase() {
    this.player.decay();
    this.enemies.forEach(e => e.decay());
    this.renderer.update(this.player, this.enemies);
    this.ui.updateBars(this.player, this.enemies);
  }

  checkEnd() {
    const allEnemiesDown = this.enemies.every(e => e.isDefeated());
    if (allEnemiesDown) {
      this.ui.setStatus("You win!");
      this.log.add("All enemies are defeated.");
      this.ui.enableActions(false);
      return true;
    }

    if (this.player.isDefeated()) {
      this.ui.setStatus("You lose.");
      this.log.add("Your stance breaks.");
      this.ui.enableActions(false);
      return true;
    }

    return false;
  }
}
