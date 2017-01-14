// Informazioni sui pianeti
var mercurio = {
	nome : "Mercurio",
	img : "img/mercurio.jpg",
	testo : "Mercurio è il pianeta più interno del sistema solare e il più vicino alla nostra stella, il Sole. È il più piccolo e la sua orbita è anche la più eccentrica (ovvero, la meno circolare) degli otto pianeti.[2] Come tutti gli altri pianeti Mercurio orbita in senso diretto, a una distanza media di 0,3871 UA con un periodo siderale di 87,969 giorni terrestri."
};

var venere = {
	nome : "Venere",
	img : "img/venere.jpg",
	testo : "Venere è il secondo pianeta del Sistema solare in ordine di distanza dal Sole con un'orbita quasi circolare che lo porta a compiere una rivoluzione in 224,7 giorni terrestri. Prende il nome dalla dea romana dell'amore e della bellezza e il suo simbolo astronomico è la rappresentazione stilizzata della mano di Venere che sorregge uno specchio."
};

var terra = {
	nome : "Terra",
	img : "img/terra.jpg",
	testo : "La Terra è il terzo pianeta in ordine di distanza dal Sole e il più grande dei pianeti terrestri del sistema solare, sia per massa sia per diametro. È il luogo primigenio degli esseri umani e nel quale vivono tutte le specie viventi conosciute, l'unico corpo planetario del sistema solare adatto a sostenere la vita come da noi concepita e conosciuta."
};

var sistema = [mercurio, venere, terra];

function mostraDati(sistema) {
	// costruisco il ciclo nell'array sistema
	for(var i=0; i < sistema.length; i++) {
		var text = '<div class="col-md-3">';
		text += '<div class="panel panel-primary">';
		text += '<div class="panel-heading">';
		text += '<h3 class="text-center">' + sistema[i].nome + '</h3></div>';
		text += '<div class="panel-body">';
		text += '<img src="' + sistema[i].img + '" class="img-responsive" alt="Mercurio" title="Mercurio">';
		text += '<p class="margin30">' + sistema[i].testo + '<span  data-toggle="modal" data-target="#ciccioModal">Continua a leggere...</span></p>';
		text += '</div></div></div>';

		// mostro quello che ho appena costruito
		document.write(text);
	}
}
