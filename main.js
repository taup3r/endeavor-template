// main.js
import Fighter from "./core/Fighter.js";
import TurnSystem from "./systems/TurnSystem.js";
import Renderer from "./ui/Renderer.js";
import UI from "./ui/UI.js";
import Log from "./ui/Log.js";

const player = new Fighter("Player", 20);
const enemies = [
  new Fighter("Bandit A", 70),
  new Fighter("Bandit B", 85)
];

const ui = new UI();
const log = new Log();
const renderer = new Renderer(
  document.getElementById("player"),
  [
    document.getElementById("enemy1"),
    document.getElementById("enemy2")
  ],
  document.getElementById("arena")
);

const turn = new TurnSystem(player, enemies, ui, renderer, log);

ui.enableActions(true);
ui.setStatus("Your turn");

ui.buttons.push.onclick = () => turn.playerAction("push", 0);
ui.buttons.feint.onclick = () => turn.playerAction("feint", 0);
ui.buttons.trip.onclick = () => turn.playerAction("trip", 0);

renderer.update(player, enemies);
ui.updateBars(player, enemies);

log.add("Two enemies approach. Break their stance or morale.");
