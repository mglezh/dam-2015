// import App.Model;


(function() {
	var s1 = new App.Model.Shape();
	s1.move(5,5);
	console.log(s1);
	console.log(s1.getX());
	console.log(s1.getX());

	var s2 = new App.Model.Shape();
	s2.move(5,5);
	console.log(s2);
	console.log(s2.getX());
	console.log(s2.getX());

	var c1 = new App.Model.Circle(0, 0 , 4);
	console.log(c1);
	console.log(c1.getRadius());
	console.log(c1.getArea());

	var sq1 = new App.Model.Square(0, 0 , 5);	
	console.log(sq1);
	sq1.move(5,5);
	console.log(sq1.getSide());
	console.log(sq1.getArea());

	var rec = new App.Model.Rectangle(0, 0, 5, 6);	
	console.log(rec);
	rec.move(5,5);
	console.log(rec.getSide());
	console.log(rec.getHeight());
	console.log(rec.getArea());

})();
