
(function(){
	var tweet = {
		id: "93483903490093",
		text: "Dhdchbvhcbhcsbhdcbshdbchds",
		author: "pp",
		createdAt: "Mon Sep 24 03:35:21 +0000 2015"
	};
	//APP.DB.insert(tweet);
	APP.DB.get(tweet.id, function(t){
		console.log(t);
	});
})();
