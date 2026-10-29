const cartes = [
    { valeur: 2, enseigne: "coeur" },
    { valeur: 5, enseigne: "pique" },
    { valeur: 7, enseigne: "carreau" },
    { valeur: 9, enseigne: "trefle" },
    { valeur: 13, enseigne: "coeur" }
]

function calculerPoints(cartes) {
    let maximum = 0;
    const compteursParValeur = {};

    for (const carte of cartes) {

        const valeur = carte.valeur;

        compteursParValeur[valeur] = (compteursParValeur[valeur] || 0) + 1;

        if (carte.valeur > maximum) {
            maximum = carte.valeur;
        }
    }

    const compteurs = Object.values(compteursParValeur);

    if (compteurs.includes(3) && compteurs.includes(2)) {
        return 50;
    }

    for (const nombre of Object.values(compteursParValeur)) {
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
