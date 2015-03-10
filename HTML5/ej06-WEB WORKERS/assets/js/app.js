
(function(){

	var calcular    = document.getElementById("Calcular");
	var numero 		= document.getElementById("Numero");
	var resultado	= document.getElementById("Resultado");

	var worker = new Worker('assets/js/primes.js');


	calcular.addEventListener('click', function(e) {
		e.preventDefault();
		var num = numero.value;
		worker.postMessage(num);
	});

	worker.addEventListener('message', function(e){
		var primes = e.data;
		resultado.value = primes;
	});

})();
