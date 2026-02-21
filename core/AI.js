// core/AI.js
import { Actions } from "./Actions.js";

export function enemyChooseAction(player, enemy) {
  if (player.stability < 40) return "push";
  if (player.morale > 60) return "feint";
  return Math.random() < 0.5 ? "push" : "trip";
}

export function enemyAct(player, enemy) {
  const action = enemyChooseAction(player, enemy);
  const result = Actions[action]("enemy", player);
  return { action, result };
}
