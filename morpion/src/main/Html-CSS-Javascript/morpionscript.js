// Déclarer les variables
let lettreCourante = 'X';
let nbToursRestants = 9;
let jeuGagne = false;

/**
 * Fonction play
 * Cette fonction permet de gérer le déroulement d'un tour de jeu.
 * Elle vérifie s'il reste des tours et si personne n'a gagné.
 * Si la case n'a pas encore été jouée, elle ajoute la lettre courante dans la case.
 * Elle décrémente le nombre de tours restants et ajoute la classe "played" à la case.
 * Si le joueur a gagné, elle affiche un message de victoire et change la couleur des cases gagnantes.
 * Si aucun joueur n'a gagné et qu'il ne reste plus de tours, elle affiche un message de match nul.
 * Sinon, elle alterne la lettre courante pour le prochain tour.
 */

function play(event) {
    // Vérifier s'il reste des tours et que personne n'a gagné
    if (nbToursRestants > 0 && !jeuGagne) {
        // Vérifier si la case a déjà été jouée
        if (event.target.classList.contains('played')) {
            return;
        }

        // Créer un TextNode contenant la lettre courante
        const cell = document.createTextNode(lettreCourante);

        // Ajouter le TextNode à l'élément cliqué
        event.target.appendChild(cell);

        // Décrémenter le nombre de tours restants
        nbToursRestants--;

        // Ajouter la classe "played" à la case pour indiquer qu'elle a été jouée
        event.target.classList.add('played');

        // Vérifier si le joueur a gagné
        if (verifierGagner()) {
            const message = document.querySelector('#message');
            message.textContent = `Le joueur ${lettreCourante} a gagné la partie !`;
            jeuGagne = true;
            // Change la couleur des cases du joueur ayant gagné la partie
            const casesGagnantes = document.querySelectorAll('.cell');
            for (const caseElement of casesGagnantes) {
                if (caseElement.textContent === lettreCourante) {
                    caseElement.style.backgroundColor = 'red';
                }
            }
        } else if (nbToursRestants === 0 && !jeuGagne) {
            // Affiche un message en cas de mache null
            const message = document.querySelector('#message')
            message.textContent = 'Match nul !';
        } else {
            // Alterner la lettre courante pour le prochain coup
            lettreCourante = lettreCourante === 'X' ? 'O' : 'X';
        }

    }
}

/**
 * Fonction vérifierGagner
 * Vérifie si un joueur gagne la partie en parcourant les combinaisons gagnantes possibles
 * Les combinaisons possibles sont stockées dans un tableau qui contient les indices des cases à vérifier
 * Si les lettres dans les cases correspondantes sont identiques, la fonction renvoie true pour indiquer que le joueur a gagné
 * Si aucune combinaison gagnante n'est trouvée, la fonction renvoie false
 */

function verifierGagner() {
    const cases = document.querySelectorAll('.cell');
    const gagne = [
        // Lignes
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Colonnes
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonales
        [0, 4, 8], [2, 4, 6]
    ];
    for (const indices of gagne) {
        const lettre1 = cases[indices[0]].textContent;
        const lettre2 = cases[indices[1]].textContent;
        const lettre3 = cases[indices[2]].textContent;
        if (lettre1 !== '' && lettre1 === lettre2 && lettre2 === lettre3) {
            return true;
        }
    }
    return false;
}

/**
 * Définir la fonction recommencer
 * Réinitialise les variables du jeu et efface le contenu des cases.
 * Remet la lettre courante à 'X', le nombre de tours restants à 9 et le jeuGagne à false.
 * Retire la classe "played" de toutes les cases et remet leur couleur de fond à leur valeur par défaut.
 * Supprime le message du gagnant de la partie, s'il y en a un.
 */

function recommencer() {
    lettreCourante = 'X';
    nbToursRestants = 9;
    jeuGagne = false;
    const cases = document.querySelectorAll('.cell');
    const message = document.querySelector('#message');
    for (const caseElement of cases) {
        caseElement.textContent = ''; // effacer le contenu de la case
        caseElement.classList.remove('played'); // enlever la classe "played"
        caseElement.style.backgroundColor = '';
    }
    // Supprime le message du gagnant de la partie
    message.removeChild(message.firstChild);
}

// Ajouter les event handlers onclick sur les div
const cells = document.querySelectorAll('.cell');
for (const cellElement of cells) {
    cellElement.onclick = play;
}

// Ajouter l'event listener sur le bouton "Recommencer"
const boutonRecommencer = document.querySelector('#recommencer');
boutonRecommencer.addEventListener('click', recommencer);
