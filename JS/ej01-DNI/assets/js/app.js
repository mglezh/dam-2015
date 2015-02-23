(function() {
    var validarDNI = function(dni) {
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var ok = false;
        if (dni /* si es diferente de undefined, cadena vacia, cero*/ && 
        	("string" === typeof dni ) &&
        	(dni.length == 9)) {

	        var dniArr = dni.split("");
            /*Para incluir a los NIE*/
            switch (dniArr[0]) {
                case "x":
                case "X":
                    dniArr[0] = "0";
                    break;
                case "y":
                case "Y":
                    dniArr[0] = "1";
                    break;
            }

//          sintax_ok = /^[0-9]{8}{a-zA-Z}$/.test(dni)
			
			dni = dniArr.join("");

	        var dniNumber = parseInt(dni);
            /* Comprobando la letra */
            if (letras[dniNumber % 23] == dniArr[8]) {
	            /* Comprobando que sean números los primeros 8 elementos */
	            var i;
	            for (i = 0; i < dniArr.length - 1; i++) {
	                if (isNaN(dniArr[i])) break;
	            }
	            if (i == (dniArr.length - 1)) ok = true;
	        }
		
        }
        return ok;
    };

    console.log(validarDNI("72754011C"));
    console.log(validarDNI("Y3623503M"));
    console.log(validarDNI("12345678A"));
    console.log(validarDNI("123A"));
    console.log(validarDNI("1234a567a8A"));
    console.log(validarDNI(""));
    console.log(validarDNI("12345678A"));
    console.log(validarDNI());
    console.log(validarDNI({}));
    console.log(validarDNI([]));
    console.log(validarDNI());
    console.log(validarDNI());

})();
