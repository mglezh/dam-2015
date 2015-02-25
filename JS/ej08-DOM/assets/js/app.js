
/*
(function() {
})();
*/

window.onload = function() {
	enlaces = document.getElementsByTagName("a");
// Número de enlaces de la página.
	console.log("Número de enlaces de la página : " + enlaces.length);
// Dirección a la que enlaza el penúltimo enlace
	if (enlaces.length > 1)
		console.log("Dirección a la que enlaza el penúltimo enlace : " + 
					enlaces[enlaces.length-2].href);
// Numero de enlaces que enlazan a http://prueba
	if (enlaces.length > 1)
		console.log("Numero de enlaces que enlazan a http://prueba : " + 
					document.querySelectorAll("a[href='http://prueba']").length);
// Número de enlaces del tercer párrafo
	parrafos = 	enlaces = document.getElementsByTagName("p");
//	if (parrafos.length > 2)
//		console.log("Número de enlaces del tercer párrafo : " + 
//					parrafos[2].getElementsByTagName("a").length);
	console.log("Número de enlaces del tercer párrafo : " + 
		document.querySelectorAll("body > p:nth-child(3) a").length);
};
