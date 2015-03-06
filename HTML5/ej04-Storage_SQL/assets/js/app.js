
(function(){
	var tweet = {
		id: "93483903490092",
		text: "Dhdchbvhcbhcsbhdcbshdbchds",
		author: "pp",
		createdAt: "Mon Sep 24 03:35:21 +0000 2015"
	};
	//APP.DB.insert(tweet);
	var datos = [];

	var success = function(datos) {
		console.log(datos);
	};

	APP.DB.getAll(success);
})();
