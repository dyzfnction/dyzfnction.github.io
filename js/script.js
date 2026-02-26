function navigate(page) {
    window.location.href = page;
}

/**
 * Fonction de navigation personnalisée
 * @param {string} url - Le chemin de la page cible
 */
function navigate(url) {
    // Petit effet de fondu avant de changer de page (optionnel)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Gestion des liens de pagination (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio de Hoshi chargé !");
    document.body.style.opacity = '1';
    
    // Ajout automatique des événements sur les bulles de l'index
    const etoile1 = document.querySelector('.etoile1');
    const etoile2 = document.querySelector('.etoile2');
    const etoile3 = document.querySelector('.etoile3');

    if(etoile1) etoile1.onclick = () => navigate('scolarite.html');
    if(etoile2) etoile2.onclick = () => navigate('projets.html');
    if(etoile3) etoile3.onclick = () => navigate('passion.html');
});