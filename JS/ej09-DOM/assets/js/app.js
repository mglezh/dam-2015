
/*
(function() {
})();
*/



window.onload = function() {
	var enlaces = document.querySelectorAll("a");
	var spanElements = document.querySelectorAll("span");

	function mostrar_ocultar_Texto(e){
		var evento = e || window.event;
		evento.preventDefault();
		// Para evitar el comportamiento por defecto del evento
		if (spanElements.length) {
			if (spanElements[0].classList[1] === "oculto") {
				spanElements[0].classList.remove("oculto");
				spanElements[0].classList.add("visible");
			}
			else {
				spanElements[0].classList.remove("visible");
				spanElements[0].classList.add("oculto");
			}
		}

	}

	if (enlaces.length) {
//		enlaces[0].onclick = mostrar_ocultar_Texto;
		enlaces[0].addEventListener('click', mostrar_ocultar_Texto, false);
	}
};
