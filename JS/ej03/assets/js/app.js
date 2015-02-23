(function() {
    var numeroPar = function(number) {
    	var result ="";
    	if (typeof number === 'number' ) {
	        return (number % 2) === 0;
	    } else {
            throw Error('No es un número');
            // Lanza una excepción 
        }
    };

    console.log("El número 2 es par ?: " + numeroPar(2));
    console.log("El número 3 es par ?: " + numeroPar(3));
    console.log("El número 4 es par ?: " + numeroPar(4));
    console.log("El número 5 es par ?: " + numeroPar(5));
    console.log("El número 6 es par ?: " + numeroPar("6"));

})();
