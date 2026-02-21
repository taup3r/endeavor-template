// ui/Log.js
export default class Log {
  constructor() {
    this.el = document.getElementById("log");
  }

  add(text) {
    this.el.textContent += text + "\n";
    this.el.scrollTop = this.el.scrollHeight;
  }
}
