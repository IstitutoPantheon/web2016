var somma1 = numero+32;
			var somma2 = somma1 + numero + 20;
			var _somma;
			var numeroSommato; // Camel Case
			/*
			Commento in più righe 
			*/
			document.writeln(somma1);
			document.writeln(somma2);
			document.writeln(numero*20);
			document.writeln(numero/10);
			document.writeln(numero-18);
			document.writeln(numero%2);

			var testo = "Nel mezzo del cammin di nostra vita"; // stringa
			var testo2 = "mi ritrovai per una selva oscura"; // stringa
			document.writeln('<p>' + testo + '<br>' + testo2 + '</p>'); // concatenazione
			/* il simbolo + può essere operatore matematico oppure operatore di concatenazione */

			// booleano
			var vero = true;
			var falso = false;

			if(numero%2==0) {
				// Il singolo uguale è operatore di assegnazione
				// il doppio (o triplo) uguale è operatore di uguaglianza
				document.write("<h4>Il numero è pari</h4>");
			}
			else {
				document.write("<h4>Il numero è dispari</h4>");
			}



			/**********************************************
			* Struttura condizionale con più casi 
			********************************************/
			if(numero%13==0) {
				document.write("<h4>Il numero è divisibile per 13</h4>");
				var multiplo = true;
			}
			else if(numero%13<10) {
				document.write("<h4>Il numero non è divisibile per 13 e dà un resto minore di 10</h4>");
			}
			else if(numero%13==10) {
				document.write("<h4>Il numero non è divisibile per 13 e dà un resto uguale a 10</h4>");
			}
			else {
				document.write("<h4>Il numero non è divisibile per 13 e dà un resto maggiore di 10</h4>");
				var multiplo = false;
			}



			if(multiplo===true) {
				document.write("<h4>Sei un utente registrato</h4>");
			}

			document.write(multiplo);