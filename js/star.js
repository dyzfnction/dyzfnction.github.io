function firstPage(){
    location.href = '../site/index.html' ; /* Lien vers la page d'accueil */
}

function mesProjets(){
	location.href = '../site/mesProjets.html'; /* Lien vers la page de mes projets. */
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

function quiSuisJe(){
    location.href = '../site/whoamI.html' ; /* Lien vers la page de présentation de mon parcours scolaire. */
}

function hobbyPassion(){
    location.href = "../site/hobbyPassion.html" ; /* Lien vers la page de mes hobby/passions */
}

function projFormation(){
    location.href = '../site/projetFormation.html' ; /* Lien vers la page de mon projet de formation. */
}

function pdf(){
	location.href = '../site/monCVpdf.html' ; /* Lien vers la page de mon projet de formation. */
}




// VEILLE TECHNO

function accueil(){
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


document.getElementById('download').addEventListener('click', function (){
    // Importer jsPDF depuis la bibliothèque jspdf
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Sélectionner le contenu HTML à convertir en PDF
    const content = document.getElementById('content');

    // Ajouter le contenu HTML dans le PDF
    pdf.html(content, {
        callback: function (doc) {
            doc.save('monCV.pdf'); // Télécharger le fichier PDF
        },
        x: 10,
        y: 10 // Position de départ dans le PDF
    });
});