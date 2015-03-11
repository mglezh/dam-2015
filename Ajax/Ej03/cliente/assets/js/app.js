$(function(){
	var $provincia  = $('#provincia');
	var $municipio  = $('#municipio');

	var cargaProvincias = function(){
		$.getJSON('../servidor/cargaProvinciasJSON.php', {}, function(provincias){
			var options = [];
			options.push(new Option('Selecciona una provincia', null));
			for (x in provincias) {
				options.push(new Option(provincias[x], x));
			}
			$provincia.children().remove();
			$provincia.append(options);
			$provincia.removeAttr('disabled');
		});
	};

	var cargaMunicipios = function(val){
		$.ajax('../servidor/cargaMunicipiosJSON.php', {
			data: {
				provincia : val
			},
			method : 'POST',
			dataType: 'json', // para que lo convierta a JSON
			success : function (municipios) {
				var options = [];
				options.push(new Option('Selecciona un municipio', null));
				for (x in municipios ) {
					options.push(new Option(municipios[x], x));
				}			
				$municipio.children().remove();
				$municipio.append(options);
				$municipio.removeAttr('disabled');
			}
		});
	};

	$provincia.on('click', function(e){
		cargaMunicipios($provincia.val());
		// .val() funciona diferente dependiendo del elemento que lo llama 
		// en este caso

	});

	cargaProvincias();
});