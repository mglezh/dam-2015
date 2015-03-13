
(function(){
	var insElement 		= document.getElementById("insert");
	var delElement 		= document.getElementById("delete");
	var searchElement 	= document.getElementById("search");
	var recetaName 		= document.getElementById("receta");

    var recipe = {
        "name": '',
        "ingredients": [],
        "instructions": '',
        "city": '',
        "latitude": '',
        "longitude": '',
        "imageUrl": ''
    };

    var ingredient = {
    	"name" : 'Sugar',
    	"amount" : '5',
    	"unit" : 'teaspoonful'
    };

    var restaurant = {
    	"name" : '',
        "city": '',
        "latitude": '',
        "longitude": '',
        "imageUrl": ''
    };

    var market = {
    	"name" : '',
        "city": '',
        "latitude": '',
        "longitude": ''
    };


	var renderTodo = function (row) {
	  var Recetas 	= document.getElementById("Recetas");
	  var li 		= document.createElement("li");
	  var t 		= document.createTextNode(row.name);

	  li.appendChild(t);
	  Recetas.appendChild(li);
	};


	var insFunction = function(){
        var receta = recipe;
        receta.name = recetaName.value;
        receta.ingredients.push(ingredient);
        receta.ingredients.push(ingredient);
		APP.DB.insElement(receta);
	};

	var delFunction = function(){
		APP.DB.delElement(recetaName.value);
	};

	var searchFuntion = function(){
		APP.DB.getAll();
	};

	insElement.addEventListener('click', insFunction, 	false);
	delElement.addEventListener('click', delFunction, 	false);
	searchElement.addEventListener('click', searchFuntion, 	false);

})();
