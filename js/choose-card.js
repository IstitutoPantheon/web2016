$(document).ready(function(){
    $('img.choose-card').attr('src', 'img/nebbia.jpeg');
    $('img.choose-card').click(function() {
        $(this).fadeOut(600, function() {
            var carta = Math.round(Math.random() * 10);
            if(carta < 5) {
                var attributo = 1;
            }
            else {
                var attributo = 2;
            }
            console.info(attributo);
            $(this).attr('src', 'img/carta' + attributo + '.png');
            $(this).addClass("girata");
            $(this).fadeIn(600);
            if($('img.girata').length % 2 == 0)
            {
                if($(this).attr("src") == $('.girata:nth-of-type(' + ($('.girata').length - 1) + ')').attr("src"))
                {
                    $(".seconda-riga").html("<h1>Hai vinto!!!</h1>");
                }
                else {
                    $(".seconda-riga").append("<H1>Hai perso!!!</h1>");
                }
                
                window.setTimeout(function(){
                    window.location.reload();
                }, 1500);
            }
        });
	});
        $('img.girata').click(function() {
            $(this).removeClass('girata');
            $this(attr("src", "img/nebbia.jpeg"));
        });

});