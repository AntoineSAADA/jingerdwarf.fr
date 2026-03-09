// Ta "base de données" de profils
const profils = [
    { nom: "Exemple 1", image: "https://picsum.photos/300/400?random=1", reponse: "gauche" },
    { nom: "Exemple 2", image: "https://picsum.photos/300/400?random=2", reponse: "droite" },
    { nom: "Exemple 3", image: "https://picsum.photos/300/400?random=3", reponse: "gauche" }
];

let indexActuel = 0;
let score = 0;

const conteneur = document.getElementById('card-container');
const scoreAffichage = document.getElementById('score');

// Fonction pour afficher la carte
function afficherCarte() {
    conteneur.innerHTML = ''; // On vide le conteneur
    
    if (indexActuel >= profils.length) {
        conteneur.innerHTML = `<h2>Jeu terminé !</h2><p>Ton score : ${score}</p>`;
        return;
    }

    const profil = profils[indexActuel];
    const carte = document.createElement('div');
    carte.classList.add('carte');
    carte.innerHTML = `
        <img src="${profil.image}" alt="image" draggable="false">
        <p>${profil.nom}</p>
    `;

    // --- LOGIQUE DU SWIPE ---
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;

    // Quand on appuie (souris ou doigt)
    const startDrag = (e) => {
        isDragging = true;
        carte.classList.add('dragging');
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    };

    // Quand on bouge
    const moveDrag = (e) => {
        if (!isDragging) return;
        const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        currentTranslate = currentX - startX;
        
        // On bouge la carte et on la penche un peu
        carte.style.transform = `translateX(${currentTranslate}px) rotate(${currentTranslate * 0.05}deg)`;
    };

    // Quand on lâche
    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        carte.classList.remove('dragging');

        // Si on a tiré assez loin (plus de 100px)
        if (currentTranslate > 100) {
            validerChoix("droite");
        } else if (currentTranslate < -100) {
            validerChoix("gauche");
        } else {
            // Sinon, la carte revient au centre
            carte.style.transform = `translateX(0px) rotate(0deg)`;
        }
    };

    // Écouteurs d'événements (Souris)
    carte.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);

    // Écouteurs d'événements (Tactile mobile)
    carte.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', moveDrag);
    window.addEventListener('touchend', endDrag);

    conteneur.appendChild(carte);
}

// Fonction pour vérifier la réponse et passer à la suite
function validerChoix(choix) {
    const profil = profils[indexActuel];
    
    // On vérifie si le choix correspond à la bonne réponse
    if (choix === profil.reponse) {
        score++;
        scoreAffichage.innerText = score;
    }

    // On passe au profil suivant
    indexActuel++;
    afficherCarte();
}

// --- Les boutons en bas (pour tester sans swiper) ---
document.getElementById('btn-gauche').addEventListener('click', () => validerChoix("gauche"));
document.getElementById('btn-droite').addEventListener('click', () => validerChoix("droite"));

// Lancement du jeu au démarrage
afficherCarte();