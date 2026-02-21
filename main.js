// main.js
import Fighter from "./core/Fighter.js";
import TurnSystem from "./systems/TurnSystem.js";
import Renderer from "./ui/Renderer.js";
import UI from "./ui/UI.js";
import Log from "./ui/Log.js";

const player = new Fighter("Player", 25);
const enemy = new Fighter("Enemy", 75);

const ui = new UI();
const log = new Log();
const renderer = new Renderer(
  document.getElementById("player"),
  document.getElementById("enemy"),
  document.getElementById("arena")
);

const turn = new TurnSystem(player, enemy, ui, renderer, log);

ui.enableActions(true);
ui.setStatus("Your turn");

ui.buttons.push.onclick = () => turn.playerAction("push");
ui.buttons.feint.onclick = () => turn.playerAction("feint");
ui.buttons.trip.onclick = () => turn.playerAction("trip");

renderer.update(player, enemy);
ui.updateBars(player, enemy);

log.add("Combat begins. Break their stance or morale.");
