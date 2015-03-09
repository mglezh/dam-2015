
(function(){

	console.log('Geolocalización');

	navigator.geolocation.getCurrentPosition(function (position) {
		console.log(position);
	});

	var map;

	var initialize = function() {
	  var mapOptions = {
	    zoom: 12,
	    center: new google.maps.LatLng(23.08, -82.32)
	  };

	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	};

	google.maps.event.addDomListener(window, 'load', initialize);

})();
