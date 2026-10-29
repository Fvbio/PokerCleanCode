const cartes = [
    { valeur: 2, enseigne: "coeur" },
    { valeur: 5, enseigne: "pique" },
    { valeur: 7, enseigne: "carreau" },
    { valeur: 9, enseigne: "trefle" },
    { valeur: 13, enseigne: "coeur" }
]

function calculerPoints(cartes) {
    let maximum = 0;

    for (const carte of cartes) {
        if (carte.valeur > maximum) {
        maximum = carte.valeur;
        }
    }

    return maximum;

}

module.exports = { calculerPoints };
