// core/Actions.js
export const Actions = {
  push(attacker, defender) {
    const force = 20 + Math.random() * 10;
    defender.applyForce(force, attacker === "player" ? 1 : -1);
    return `Push with force ${force.toFixed(1)}`;
  },

  feint(attacker, defender) {
    const pressure = 12 + Math.random() * 8;
    defender.applyPressure(pressure);
    return `Feint applies ${pressure.toFixed(1)} pressure`;
  },

  trip(attacker, defender) {
    const trip = 25 + Math.random() * 10;
    defender.applyTrip(trip);
    return `Trip reduces stability by ${trip.toFixed(1)}`;
  }
};
