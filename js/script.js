function navigateTo(page) {
    window.location.href = page;
}

function accueil(){
	location.href = '../site/index.html'; /* Lien vers la page d'accueil. */
}
function parcours(){
	location.href = '../site/parcours.html'; /* Lien vers la page de parcours scolaire. */
}
function hobby(){
	location.href = '../site/hobby.html'; /* Lien vers la page de oui. */
}


function projets(){
	location.href = '../site/projets.html'; /* Lien vers la page de oui. */
}
function projetsScolaires(){
	location.href = '../site/scolaire.html'; /* Lien vers la page de oui. */
}
function projetsPro(){
	location.href = '../site/professionnel.html'; /* Lien vers la page de oui. */
}

/* Compétences */
function competences(){
	location.href = '../site/competences.html'; /* Lien vers la page de oui. */
}

/* Certification */
function certif(){
	location.href = '../site/certifications.html'; /* Lien vers la page de oui. */
}


function projet1(){
	location.href = '../site/menagerie.html'; /* Lien vers la page de mes projets. */
}
function projet2(){
	location.href = '../site/siteMarchand.html'; /* Lien vers la page de mes projets. */
}
function projet3(){
	location.href = '../site/octimeStage.html'; /* Lien vers la page de mes projets. */
}
function projet4(){
	location.href = '../site/getcet.html'; /* Lien vers la page de mes projets. */
}
function projet5(){
	location.href = '../site/siojeux.html'; /* Lien vers la page de mes projets. */
}
function projet6(){
	location.href = '../site/fripouille.html'; /* Lien vers la page de mes projets. */
}
function projet7(){
	location.href = '../site/nouvellevague.html'; /* Lien vers la page de mes projets. */
}
function projet8(){
	location.href = '../site/windev.html'; /* Lien vers la page de mes projets. */
}
function projet9(){
	location.href = '../site/clavier.html'; /* Lien vers la page de mes projets. */
}


function projFormation(){
    location.href = '../site/projetFormation.html' ; /* Lien vers la page de mon projet de formation. */
}


function pdf(){
	location.href = '../site/monCVpdf.html' ; /* Lien vers la page de mon projet de formation. */
}




// VEILLE TECHNO
function accueilveille(){
	location.href = '../site/vtaccueil.html'; /* Lien vers la page d'accueil. */
}
function introduction(){
	location.href = '../site/vtintro.html'; /* Lien vers la page d'introduction. */
}
function a1(){
	location.href = '../site/vta1.html' ; /* Lien vers le premier article. */
}
function a2(){
	location.href = '../site/vta2.html' ; /* Lien vers le deuxième article. */
}
function a3(){
	location.href = '../site/vta3.html' ; /* Lien vers le troisième article. */
}
function a4(){
	location.href = '../site/vta4.html' ; /* Lien vers le quatrième article. */
}
function a5(){
	location.href = '../site/vta5.html' ; /* Lien vers le cinquième article. */
}
function a6(){
	location.href = '../site/vta6.html' ; /* Lien vers le sixième article. */
}
function a7(){
	location.href = '../site/vta7.html' ; /* Lien vers le septième article. */
}
function a8(){
	location.href = '../site/vta8.html' ; /* Lien vers le huitième article. */
}
function a9(){
	location.href = '../site/vta9.html' ; /* Lien vers le neuvième article. */
}
function recap(){
	location.href = '../site/vtrecap.html'; /* Lien vers le récapitulatif. */
}







// Fonction pour télécharger le fichier
function telechargerFichier() {
    // On simule un clic sur le lien caché pour télécharger le fichier
    document.getElementById('downloadLink').click();
}

// Ajouter un événement au bouton de téléchargement
document.getElementById('btnTelecharger').addEventListener('click', telechargerFichier);




function setupBurgerMenu() {
	const burger = document.querySelector('.burger');
	const navMenu = document.querySelector('.nav-menu');
  
	if (!burger || !navMenu) return;
  
	burger.addEventListener('click', () => {
	  burger.classList.toggle('open');
	  navMenu.classList.toggle('open');
	});
  
	// Fermer le menu si on clique sur un lien
	const navLinks = navMenu.querySelectorAll('a');
	navLinks.forEach(link => {
	  link.addEventListener('click', () => {
		burger.classList.remove('open');
		navMenu.classList.remove('open');
	  });
	});
  }
  
  // Appel de la fonction une fois le DOM chargé
  document.addEventListener('DOMContentLoaded', setupBurgerMenu);
  
  

  document.addEventListener("DOMContentLoaded", function () {
	const toggle = document.getElementById("menu-toggle");
	const menu = document.getElementById("menu-nav");
  
	toggle.addEventListener("click", function () {
	  menu.classList.toggle("active");
	});
  
	// Optionnel : fermer si on clique à l’extérieur
	document.addEventListener("click", function (e) {
	  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
		menu.classList.remove("active");
	  }
	});
  });
  
  
  
  