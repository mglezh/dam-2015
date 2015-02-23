(function() {
    var stringUpLwCase = function(str) {
    	var result = "";

        if (typeof str === 'string'){
            switch (str) {
                case str.toUpperCase(): result = "mayúsculas"; break;
                case str.toLowerCase(): result = "minúsculas"; break;
                default: result = "mayúsculas y minúsculas";
            }
        } else {
            throw Error('No es un string');
//            throw Error('No es un string');
//            throw Error('No es un string');
            // Lanza una excepción 
        }
    };

    try {
        console.log("El string 'MAHSBHBHXBSH' está formado por " + stringUpLwCase('MAHSBHBHXBSH'));
        console.log("El string 'xbashbshbccd' está formado por " + stringUpLwCase('xbashbshbccd'));
        console.log("El string 'dcbcGGsnjsAA' está formado por " + stringUpLwCase('dcbcGGsnjsAA'));
        console.log("El string null está formado por " + stringUpLwCase(null));

    }
    catch(e){
        if (e instanceof Error){        
        } /* else if (e instanceof TypeError){
            } else ...
        }
        */
        ;
    }
})();
