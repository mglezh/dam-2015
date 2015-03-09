var APP = APP || {};
APP.DB = (function(){
	var db,
		cfg ={
			name: 'Twitter.db',
			version: 2,
			description: 'Twitter database',
		};

/*


*/	
	var init= function(success) {
		if (!db) {
			var request = indexedDB.open(cfg.name, cfg.version);

			request.addEventListener('success', function(e){
				console.log('Database name ' + cfg.version + ' Ok');
				db = e.target.result;

				success();
			});

			request.addEventListener('upgradeneeded', function(e){
				console.log('Updatin database...'); 
				db = e.target.result;

				var tweets = db.createObjectStore('tweets', {
					keyPath:  'id',
					autoIncrement: false
				});

				console.log(tweets);
		    });

			request.addEventListener('error', function(e){
				console.log('Error opening database');
				db = e.target.result;
			});

		}else{
			success();
		}
	};

	var insert = function(tweet){
		init(function(){
			var transaction = db.transaction(['tweets'], 'readwrite');
			var store = transaction.objectStore('tweets');
			var request = store.add(tweet);
		});
	};

	var get = function(id, success){
		init(function(){
			var transaction = db.transaction(['tweets'], 'readonly');
			var store = transaction.objectStore('tweets');
			var getRequest = store.get(id);

			getRequest.addEventListener('success', function(e){
				success(e.target.result);
			});
		});
	};

	return{
		"insert" : insert,
		"get" : get
	};
})();
