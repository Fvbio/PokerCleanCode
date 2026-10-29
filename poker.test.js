const { test } = require("node:test");
const assert = require("node:assert/strict");
const { calculerPoints } = require("./poker");

test("carte haute", function () {
  const cartes = [
    { valeur: 2, enseigne: "coeur" },
    { valeur: 5, enseigne: "pique" },
    { valeur: 7, enseigne: "carreau" },
    { valeur: 9, enseigne: "trefle" },
    { valeur: 13, enseigne: "coeur" }
  ];

  const resultat = calculerPoints(cartes);

  assert.equal(resultat, 13);
});