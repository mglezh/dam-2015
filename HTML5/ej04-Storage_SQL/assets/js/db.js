var APP = APP || {};
APP.DB = (function(){
	var db,
		cfg ={
			name: 'Twitter.db',
			version: '1.0',
			description: 'Twitter database',
			size: '2 * 1024 * 1024'

		},
		createTable = 	'CREATE TABLE IF NOT EXISTS tweets '+
						' (id TEXT PRIMARY KEY, '+
						' text TEXT NOT NULL,'+
						' author TEXT NOT NULL,'+
						' create_at INTEGER);';
 
	try {
		db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
	} catch (e) {
		// Si la versión de base de dato no coincide
		if (e.code===11) {
			// Menudo lio
		}
		console.log(e);
	}

	if (db){
		var createSchema = function (tx) {
			tx.executeSql(createTable, [], function(tx, results){
				// Se ejecuta si ha ido bien la primera función"createTable"
				console.log('Table tweet creada');
				console.log(results);
			}, function(tx, error){
				// Se ejecuta si hubo error
				console.log('DB Error: ' + error);
			});
		};
		db.transaction(createSchema);
	}

	var insert = function(tweet) {
		var sql = "INSERT INTO tweets VALUES(?,?,?,?);";
		db.transaction(function(tx){
			tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.createdAt], function(tx, results){
				// Se ejecuta si todo OK
				console.log('Tweet inserted');
				console.log(results);
			}, function(tx, error){
				// Se ejecuta si hubo error
				console.log('Error inserting tweet');
			});
		});
	};

	var getAll = function(success) {
		var sql = "SELECT * FROM tweets ORDER BY create_at;";
		db.transaction(function(tx){
			tx.executeSql(sql, [], function(tx, results){
				// Se ejecuta si todo OK
				console.log('Get all tweets');
				console.log(results);
				var datos = [];
				for (var i = 0; i < results.row.length - 1; i++) {
					datos.push(results.rows.item[i]);
				}
				success(datos);
			}, function(tx, error){
				// Se ejecuta si hubo error
				console.log('Error getting all');
			});
		});
	};

	return{
		"insert" : insert,
		"getAll" : getAll
	};
})();
