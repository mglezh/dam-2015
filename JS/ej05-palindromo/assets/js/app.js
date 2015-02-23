(function() {
    var stringPalindromo = function(str) {
//    	var strSinEspacios         = str.toUpperCase().split(" ").join("").split("").join("");
//    	var strSinEspaciosReverse  = str.toUpperCase().split(" ").join("").split("").reverse().join("");
//      str.trim() Quita los espacios a los lados...
//		str.replace(' ', '');  Solo elimina el primer espacio en blanco que encuentra 
//		str.replace(/\s/g, ''); /\s/g = Busca todos (/g = global) los espacios en blanco de manera global 
    	
    	if (typeof str === 'string'){
	    	return (str.toUpperCase().split(" ").join("").split("").join("") === 
	    			str.toUpperCase().split(" ").join("").split("").reverse().join(""));   		} 
   		return false;
    };

    console.log("La cadena 'La  casasac aL' es un polindromo ? : " + stringPalindromo('La casasac aL'));
    console.log("La cadena 'sdhh ygyyyyyg' es un polindromo ? : " + stringPalindromo('sdhh ygyyyyyg'));
})();
