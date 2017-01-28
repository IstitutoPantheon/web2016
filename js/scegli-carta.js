/* Nel nostro file js inseriremo codice jQuery */
$(document).ready(function() {
	$('img.scegli-carta').attr('src', 'img/nebbia.jpeg');
	$('img.scegli-carta').click(function() {
		$(this).fadeOut(600, function() {
			var carta = Math.round(Math.random() * 10);
			if(carta<5) {
				var attributo = 1;
			}
			else {
				var attributo = 2;
			}
			$(this).attr('src', 'img/carta'+attributo+'.png');
			$(this).fadeIn(600);
			$(this).addClass("girata");

			/* Facciamo partire un controllo dopo che sono state girate due carte */
			if($('img.girata').length % 2 == 0) {
				if($(this).attr('src') == $('.girata:nth-of-type('+($('.girata').length-1)+')').attr("src")) {
					// Nella seconda riga inseriamo il messaggio con il risultato
					$("#seconda-riga").append("<h1>Hai vinto!!!</h1>");
				}
				else {
					$("#seconda-riga").html("<h1>Hai perso!!!</h1>");
				}

				window.setTimeout(function() {
					window.location.reload();
				}, 1500);
			}
		});
	});
});