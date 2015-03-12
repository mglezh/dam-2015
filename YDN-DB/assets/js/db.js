var APP = APP || {};
APP.DB = (function() {

	/*
    var schema = {
        stores: [{
            name: 'recetas',
            keyPath: "_id"
        }]
    };
    */

    db = new ydn.db.Storage('CookingCalendar'/*, schema*/);


	var renderTodo = function (row) {
	  var Recetas 	= document.getElementById("Recetas");
	  var li 		= document.createElement("li");
	  var t 		= document.createTextNode(row.name);

	  li.appendChild(t);
	  Recetas.appendChild(li)
	};

	var getAllTodoItems = function () {
	  var Recetas = document.getElementById("Recetas");
	  Recetas.innerHTML = "";

	  var df = db.values('recetas');

	  df.done(function (items) {
	    var n = items.length;
	    for (var i = 0; i < n; i++) {
	      renderTodo(items[i]);
	    }
	  });

	  df.fail(function (e) {
	    throw e;
	  });
	};

    var insElement = function(receta) {
        var timeStamp = new Date().getTime();
        db.put('recetas', receta, timeStamp)
        .done(function(ok){
        	console.log(ok);
        })
        .fail(function(e) {
            console.log(e);
        });

        getAllTodoItems();
    };

    var delElement = function(receta) {
    	db.search('name', receta)
        .done(function(ok){
        	console.log(ok);
        	db.remove('recetas', ok.primaryKey);  
        })
        .fail(function(e) {
            console.log(e);
        });

    };

    var getAll = function(id) {
        var df = db.values('name');

        df.done(function(items) {
            var n = items.length;
            for (var i = 0; i < n; i++) {
                renderTodo(items[i]);
            }
        });

        df.fail(function(e) {
            throw e;
        });
    };

	getAllTodoItems();
	
    return {
        "insElement": insElement,
        "delElement": delElement,
        "getAll": getAll
    };

})();
