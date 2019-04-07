// TODO (1) Definissez la fonction cacherBalise(nomDeLaBalise) qui prend en paramettre un nom de balise et cache/affiche tous les elements qui ont ce meme nom
// * pour recuperer la valeur d'un input on utilise la fonction .val();

// TODO (2) si aucunes balises n'a le nom indiqué, affichez le message d'alerte: Aucunes balises portent ce nom la!
// * pour detecter si une balise existe bien dans une page HTML, on teste si le resultat de $("nomBalise") est un tableau avec un taille de 0.
// Par exemple si on veut voir s'il y a des paragraphes dans notre page HTML on fait: $("p").length != 0

// TODO (2) Definissez la fonction cacher() qui recupere ce qui à été ecrit dans le input #nomBalise et fait appel à cacherBalise(nomDeLaBalise) pour cacher/afficher la balise indiquée.


function cacher() {
	var nomBalise = $("#nomBalise").val();
	cacherBalise(nomBalise);
}

function cacherBalise(nomDeLaBalise) {
	var balises = $(nomDeLaBalise);
	if(balises.length != 0) { 
		balises.toggle();
	} else {
		alert("Aucunes balises portent ce nom la!");
	}
}