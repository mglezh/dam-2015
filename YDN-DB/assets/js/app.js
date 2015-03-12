
(function(){
	var insElement 		= document.getElementById("insert");
	var delElement 		= document.getElementById("delete");
	var searchElement 	= document.getElementById("search");
	var recetaName 		= document.getElementById("receta");

	var insFunction = function(){
        var receta = {
            "name": recetaName.value,
            "localization": 'Donosti',
        };
		APP.DB.insElement(receta);
	};

	var delFunction = function(){
		APP.DB.delElement(recetaName.value);
	};

	insElement.addEventListener('click', insFunction, 	false);
	delElement.addEventListener('click', delFunction, 	false);

})();
