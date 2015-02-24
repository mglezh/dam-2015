var App = App || { Model : {} }; 
// Si app no está definido la defino 
// y le agrego un parámetro Model de tipo objeto

App.Model.Square = (function() {
	// Variables privadas
	var _side;

	//Constructor 
	function Square(x, y, side) {
		App.Model.Shape.call(this, x,y);
		//App.Model.Shape.apply(this, [x,y])
		//App.Model.Shape.bind(this)(x,y)
		//Ejecuta la función Shape (constructor)
		//y le cambia el contexto a Shape por el de la función Circle
		_side = (typeof side === 'number')? side : 0;
	}

	//Herencia OJO: Se pone antes de declarar los métodos
	Square.prototype = Object.create(App.Model.Shape.prototype);
	Square.prototype.constructor = Square;

	Square.prototype.setSide = function(side){
		_side = (typeof side === 'number')? side : 0;
	};

	Square.prototype.getSide = function(){
		return _side;
	};

	Square.prototype.getArea = function(){
		return Math.pow(_side, 2);
	};

	return Square;

})();
