/* ============================= */
/*         NAVIGATIONS            */
/* ============================= */

function accueil(){
	setTimeout(() => {
		location.href = '../site/index.html'; 
	}, 300);

}
function scolarite(){
	setTimeout(() => {
		location.href = '../site/scolarite.html';
	}, 300);
}
function projets(){
	setTimeout(() => {
	location.href = '../site/projets.html';
	}, 300);
}

function projetsco(){
	setTimeout(() => {
		location.href = '../site/projets-sco.html';
	}, 300);

}
function projetspro(){
	setTimeout(() => {
		location.href = '../site/projets-pro.html'; 
	}, 300);
}

function passion(){
	setTimeout(() => {
		location.href = '../site/passion.html';
	}, 300);
}

function retour(){
	setTimeout(() => {
		window.history.back();
	}, 300);
}


/* ============================= */
/*       MENU MOBILE CLICK        */
/* ============================= */

document.querySelectorAll('.categorie-menu, .retour').forEach(el => {
    el.addEventListener('click', function(e) {
        const isOpen = el.getAttribute('data-open') === 'true';
        const page = el.getAttribute('data-page');

        // Ferme toutes les autres bulles
        document.querySelectorAll('.categorie-menu, .retour').forEach(other => {
            if (other !== el) {
                other.setAttribute('data-open', 'false');
                other.style.width = '';
                other.querySelector('span').style.opacity = '0';
                other.classList.remove('hovered'); // réactive l’étoile
            }
        });

        if (!isOpen) {
            // Premier clic → déroule
            el.setAttribute('data-open', 'true');
            el.style.width = '7rem';
            el.querySelector('span').style.opacity = '1';
            el.classList.add('hovered'); // cache l’étoile
        } else {
            // Deuxième clic → navigation
            if (page === 'retour') {
                window.history.back();
            } else {
                location.href = '../site/' + page + '.html';
            }
        }
    });
});


/* TELECHARGEMENT DU CV */

// Fonction pour télécharger le fichier
// function telechargerFichier() {
    // On simule un clic sur le lien caché pour télécharger le fichier
//     document.getElementById('downloadLink').click();
// }

// Ajouter un événement au bouton de téléchargement
// document.getElementById('btnTelecharger').addEventListener('click', telechargerFichier);



function telechargerFichier() {
    const url = "../images/CV_StellaKimpeseDiaSuekama.pdf";
    const nomFichier = "CV_Stella_Kimpese_Dia_Suekama.pdf";

    // Création d’un objet "a" temporaire
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", nomFichier);
    a.setAttribute("target", "_blank"); // sécurité mobile : ouvre quand même si download n’est pas supporté
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById("btnTelecharger").addEventListener("click", function(e) {
    e.preventDefault();
    telechargerFichier();
});






