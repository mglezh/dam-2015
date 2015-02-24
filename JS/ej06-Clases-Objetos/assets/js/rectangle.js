var App = App || { Model : {} }; 
// Si app no está definido la defino 
// y le agrego un parámetro Model de tipo objeto

App.Model.Rectangle = (function() {
	// Variables privadas
	var _height;

	//Constructor 
	function Rectangle(x, y, width, height) {
		App.Model.Square.call(this, x,y, width);
		//App.Model.Shape.apply(this, [x,y])
		//App.Model.Shape.bind(this)(x,y)
		//Ejecuta la función Shape (constructor)
		//y le cambia el contexto a Shape por el de la función Circle
		_height = (typeof height === 'number')? height : 0;
	}

	//Herencia OJO: Se pone antes de declarar los métodos
	Rectangle.prototype = Object.create(App.Model.Square.prototype);
	Rectangle.prototype.constructor = Rectangle;

	Rectangle.prototype.setHeight = function(height){
		_height = (typeof height === 'number')? height : 0;
	};

	Rectangle.prototype.getHeight = function(){
		return _height;
	};

	Rectangle.prototype.getArea = function(){
//		return _height * Rectangle.prototype.getSide.call(this);
//		No es el caso pero se emplearía si se quiere llamar una funcion 
//      del prototipo que tenga el mismo nombre que la de esta instancia
		return _height * this.getSide();
	};

	return Rectangle;

})();
