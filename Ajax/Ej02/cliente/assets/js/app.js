$(function(){
	var $ticker  = $('#ticker');
	var $detener = $('#detener');

	var peticionAJAX = function(){
		// $.ajax(url[, settings ]);
		// La url se toma desde el HTML que llama al JS
		// $.ajax('../servidor/generaContenidos.php?user=arkaitz&pass=1234'); Para enviar datos al servidor
		/*
		$.ajax('../servidor/generaContenidos.php',{
			data : {
				user: 'Arkaitz',
				pass: '1234'
			},
			method : 'POST',
			success : function (data, status, jqXHR) {
				$ticker.text(data);
				console.log(data);
				console.log(status);
				console.log(jqXHR);
			}
		});
		*/

		$.get('../servidor/generaContenidos.php', null, function(data){
				$ticker.text(data);
		});
	};

	// tanto setInterval, como setTimeOut devuelve un valor que se puede emplear para detenerlo
	var interval = setInterval(peticionAJAX, 1000);
	//var interval = setTimeout(peticionAJAX, 1000);

	$detener.on('click', function(e){
		clearInterval(interval);
		//clearTimeout();
	});
});