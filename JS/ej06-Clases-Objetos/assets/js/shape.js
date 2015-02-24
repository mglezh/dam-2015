var App = App || { Model : {} }; 
// Si app no está definido la defino 
// y le agrego un parámetro Model de tipo objeto

App.Model.Shape = (function() {
	// Variables privadas
	var _x;
	var _y;

	//Constructor 
	function Shape(x, y){
		_x = (typeof x === 'number')? x : 0;
		_y = (typeof y === 'number')? y : 0;
	}

	//Metodos de la funcion
	Shape.prototype.move = function(x, y){
		_x += (typeof x === 'number')? x : 0;
		_y += (typeof y === 'number')? y : 0;
	};

	Shape.prototype.getX = function(){
		return _x;
	};

	Shape.prototype.getY = function(){
		return _y;
	};

	Shape.prototype.setX = function(x){
		_x = (typeof x === number)? x : 0;
	};

	Shape.prototype.setY = function(y){
		_y = (typeof y === number)? y : 0;
	};

	return Shape;

})();
