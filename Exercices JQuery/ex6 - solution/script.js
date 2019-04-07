// TODO (1) Au chargement du document, ajoutez une fonction a l'evenement "mouseenter" des paragraphes, cette fonction affiche le message d'alerte "Le mot de passe de mon compte bancaire est 123456".

// * pour ajouter une fonction qui se declanche apres un evenement:
// $("balise").on("mouseenter", function() { ... })

$(document).ready(function() {
	$("p").on("mouseenter", function() {
		alert("Le mot de passe de mon compte bancaire est 123456");
	});

});