
(function(){

	var calcular    = document.getElementById("Calcular");
	var numero 		= document.getElementById("Numero");
	var resultado	= document.getElementById("Resultado");

	var worker = new Worker('assets/js/primes.js');


	calcular.addEventListener('click', function(e) {
		// e.preventdefault();
		var num = numero.value;
		this.postMessage(num);
	});

	worker.addEventListener('message', function(e){
		var primes = e.data;
		resultado.value = primes;
	});

})();
