// TODO (1) Au chargement du document, ajoutez un element li au debut de la liste avec l'id "maListe", cet element contient le text suivant: Premier element
// * pour attendre le chargement du document on utilise:
// $(document).ready(function() { ... });

// * pour creer des balises HTML avec JQuery on fait: $("<balise></balise>")
// par exemple pour creer un paragraphe vide on fait: $("<p></p>");

// * pour modifier le contenu d'une balise on utilise .html("nouveau contenu");

// * pour attacher une balise a une autre balise parent, on utilise .prepend() pour l'ajouter au debut, et .append() pour l'ajouter a la fin. par exemple
// baliseParent.prepend(maNouvelleBalise);

// TODO (2) Creez une element <li> avec le text: Troixieme element
// TODO (3) ajouter cet element a la fin de la liste "maListe".

$(document).ready(function() {
	var maListe = $("#maListe");
	
	var li1 = $("<li></li>");
	li1.html("Premier element");

	maListe.prepend(li1);	

	var li2 = $("<li></li>");
	li2.html("Troixieme element");
	
	maListe.append(li2);	

});