const cartes = [
    { valeur: 2, enseigne: "coeur" },
    { valeur: 5, enseigne: "pique" },
    { valeur: 7, enseigne: "carreau" },
    { valeur: 9, enseigne: "trefle" },
    { valeur: 13, enseigne: "coeur" }
]

function calculerPoints(cartes) {
    let maximum = 0;
    const estBrelan = {};

    for (const carte of cartes) {

        const valeur = carte.valeur;

        estBrelan[valeur] = (estBrelan[valeur] || 0) + 1;

        if (carte.valeur > maximum) {
            maximum = carte.valeur;
        }
    }

    for (const nombre of Object.values(estBrelan)) {
        if (nombre ===3) {
            return 30;
        }
    }

    for (const nombre of Object.values(estBrelan)) {
        if (nombre === 4) {
            return 60;
        }

        if (nombre === 3) {
            return 30;
        }
    }

    return maximum;

}

module.exports = { calculerPoints };
