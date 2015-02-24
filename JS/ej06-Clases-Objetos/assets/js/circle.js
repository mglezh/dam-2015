var App = App || { Model : {} }; 
// Si app no está definido la defino 
// y le agrego un parámetro Model de tipo objeto

App.Model.Circle = (function() {
	// Variables privadas
	var _radius;

	//Constructor 
	function Circle(x, y, radius) {
		App.Model.Shape.call(this, x,y);
		//App.Model.Shape.apply(this, [x,y])
		//App.Model.Shape.bind(this)(x,y)
		//Ejecuta la función Shape (constructor)
		//y le cambia el contexto a Shape por el de la función Circle
		_radius = (typeof radius === 'number')? radius : 0;
	}
	
	//Herencia OJO: Se pone antes de declarar los métodos
	Circle.prototype = Object.create(App.Model.Shape.prototype);
	Circle.prototype.constructor = Circle;

	Circle.prototype.setRadius = function(radius){
		_radius = (typeof radius === 'number')? radius : 0;
	};

	Circle.prototype.getRadius = function(){
		return _radius;
	};


	Circle.prototype.getArea = function(){
		return Math.pow(_radius, 2) * Math.PI;
	};

	return Circle;

})();
