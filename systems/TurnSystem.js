// systems/TurnSystem.js
import { Actions } from "../core/Actions.js";
import { enemyAct } from "../core/AI.js";

export default class TurnSystem {
  constructor(player, enemy, ui, renderer, log) {
    this.player = player;
    this.enemy = enemy;
    this.ui = ui;
    this.renderer = renderer;
    this.log = log;
    this.playerTurn = true;
  }

  playerAction(type) {
    const result = Actions[type]("player", this.enemy);
    this.log.add(`You: ${result}`);

    this.endPhase();
    if (!this.checkEnd()) this.enemyTurn();
  }

  enemyTurn() {
    this.playerTurn = false;
    this.ui.setStatus("Enemy's turn…");

    setTimeout(() => {
      const { action, result } = enemyAct(this.player, this.enemy);
      this.log.add(`Enemy: ${result}`);

      this.endPhase();
      if (!this.checkEnd()) {
        this.playerTurn = true;
        this.ui.setStatus("Your turn");
        this.ui.enableActions(true);
      }
    }, 600);
  }

  endPhase() {
    this.player.decay();
    this.enemy.decay();
    this.renderer.update(this.player, this.enemy);
    this.ui.updateBars(this.player, this.enemy);
  }

  checkEnd() {
    if (this.enemy.isDefeated()) {
      this.ui.setStatus("You win!");
      this.log.add("Enemy collapses.");
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
