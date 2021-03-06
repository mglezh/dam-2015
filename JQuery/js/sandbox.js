$(function(){
	var $divs = $('div.module');
	var $li	  = $('#myList li:nth-child(3)');
	var $lis  = $('#myList > li');

	// Seleccionar todos los elementos div que poseen la clase "module".
	// Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?

	

	console.log($divs);
	console.log($li);
	console.log($lis.eq(2)); // Similar al anterior

	var $ul = $('#myList'); 
	console.log($ul.find(li).eq(2));  // Similar al anterior


	// Seleccionar el elemento label del elemento input utilizando un selector de atributo.
	var $input =$('input[name="q"]');
	var $label =$('label[for = "' + $input.attr('name') + '"]');
	console.log($label);

	// Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
	var $hidden = $(':hidden'); //Todos los elementos ocultos
	console.log($hidden);

	// Una especie de for
	$hidden.each(function(idx, elem){
		//console.log(elem);
		$(elem).show(); // Muestra los elementos ocultos
		//$(elem).hide(); // Oculta los elementos
	});

	// Averiguar cuantas imágenes en la página poseen el atributo alt.

	var $imgs = $('img'); //Todos los elementos ocultos
	$imgs.each(function(idx, elem){
		console.log(elem.alt);
	});


// RECORRER EL DOM
	// Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle 
	// una clase al mismo.
	// $input.closest('form') sube hasta encontrar el elemento más cercano de tipo "form" en este caso
	$input.closest('form').addClass('form');	
	$input.closest('form').removeClass('form');
	$input.closest('form').toggleClass('form'); // SI lo tiene lo borra, si no lo tiene lo agrega

	// Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y 
	// remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
	var $current = $('#myList .current');

	$current.removeClass('current').next().addClass('current');
								// "next" va al hermano que está a continuación del elemento

	// Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
	var $submit = $('#specials select')
					.closest('ul')
					.find('input[type="submit"]');

	// Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo 
	// y luego añadir la clase "disabled" a los elementos hermanos.
	$('#slideshow li')
					.first()
					.addClass('current')
					.siblings()
					.addClass('disabled'); // Se la agrega a todos los elementos que devuelve "siblings"

// MANIPULACIÓN	

	// Añadir 5 nuevos ítems al final de la lista desordenada #myList.
	var lis = [];
	for (var i = 0; i < 4; i++) {
		lis.push('<li>Element ' + i + '</li>')
	}  // No se debe hacer accessos a elemntos del DOM dentro de un for 
	$ul.append(lis.join(''));	

	// 
	$li = $('<li/>', {
		class : 'current',
		text : 'Node list',
		id : 'myLi'
	});
	ul.append($li);
	li.appeend

	// Remover los ítems impares de la lista.	
	$ul.find('li:odd').remove();

	// Añadir otro elemento h2 y otro párrafo al último div.module.


// EVENTOS
	$lis.on('click tap', 	// Le agrega un lissent a todos los elementos de lis
							// Se pueden capturar varios eventos a la vez
			function(e) { // "e" es un evento JQuery
				console.log(e);
				console.log(this); // El que origina el evento = JS
				console.log(e.originalEvent); // Propiedades del elemento original de JS
			});

	$ul.on('click', 'li', // El evento (generado por los li) se captura en ul
			function(e) { // "e" es un evento JQuery
				console.log(e);
				console.log(this); // Coincidiría en este caso con el "li" donde se generó el evento
				console.log(e.originalEvent); // Propiedades del elemento original de JS
			});

	$ul.one('click', // El evento solo se escucha una vez
			function(e) { // "e" es un evento JQuery
				console.log(e);
				console.log(this); 
				console.log(e.originalEvent); // Propiedades del elemento original de JS
			});
	




});