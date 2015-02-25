window.onload = function() {
	var inputElements 	= document.querySelectorAll("input");
	var lists 			= document.querySelectorAll("ul");
	var	listElements 	= lists[0].querySelectorAll("li");


	function eraseElement(e){		// Buscar el elemento que se quiere borrar
		var evento = e || window.event;
		if (this && confirm('Seguro que quieres eliminarlo ? ')) {
			// Se le dice al padre del elemento que lo borre
			// this.parentNode.removeChild(this);
			this.removeChild(evento.target);
			// e.target Elemento donde se originó el evento
		}
	}

	var addElement = function(e){
		var evento = e || window.event;
		// Para evitar la propagación del evento hacia los padres
		evento.stopPropagation();

		if (lists.length) {
			// Crear nodo de tipo Element
			var listElement = document.createElement("li");
			// Le agrega contenido
			listElement.innerHTML = "Nuevo Elemento";
			// Le agrega la atención al evento a los nuevos elementos que se agregan
//			listElement.addEventListener('click', eraseElement, false);
			// Añadir el elemento "li" como hijo del ListElements
			lists[0].appendChild(listElement);
		}
	};

	function eraseLastElement(){
		var	listElements = lists[0].querySelectorAll("li");
		// Buscar el elemento que se quiere borrar
		if (listElements.length) {
			// Se le dice al padre del elemento que lo borre
			listElements[listElements.length-1].parentNode.removeChild(listElements[listElements.length-1]);
		}
	}

	var log = function(){
		console.log("Se agregó un elemento a " + this + " el " + new Date());
	};

	if (inputElements.length) {
		var buttonAdd = inputElements[0];
		var buttonErase = inputElements[1];
		inputElements[0].addEventListener('click', addElement, 	 		false);
		inputElements[0].addEventListener('click', log, 	 	 		false);
		// Se puede asociar más de una función a un mismo evento

		inputElements[1].addEventListener('click', eraseLastElement, 	false);

//		for (var i = 0; i < listElements.length; i++) {
//			listElements[i].addEventListener('click', eraseElement, false);
//		}
	}

	if (lists[0]){
		lists[0].addEventListener('click', eraseElement, false);
	}
};
