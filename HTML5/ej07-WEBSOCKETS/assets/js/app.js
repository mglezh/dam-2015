
(function(){

	var socket = new WebSocket('ws://html5rocks.websocket.org/tweets');



	socket.addEventListener('open', function(e){ 
		console.log("Welcome - status "+this.readyState); 
	});

	socket.addEventListener('close', function(e){ 
		console.loglog("Disconnected - status "+this.readyState); 
	});

	socket.addEventListener('message', function(event) {
	    var data = JSON.parse(event.data);
	    if (data.action == 'joined') {
	        initiliseChat();
	    } else {
	        showNewMessage(data.who, data.text);
	    }
	});


	socket.send("Hey there, I'm using WebSockets");


})();
