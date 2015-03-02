window.onload = function() {
	var videoLoaded 	= false;
	var buttonElements 	= document.querySelectorAll("button");
	var video 			= document.getElementById("Video");
	var videoProgress 	= document.getElementById("videoProgress");
	var videoVolumen 	= document.getElementById("Volumen");
	var playlist		= document.querySelectorAll("#playlist");

	var canplayFunction = function(e) {
		videoLoaded = true;
	};

	function buttonFunction(e){	
		var evento = e || window.event;

		if (videoLoaded) {
			switch (this.className){
				case "Play": 
					videoVolumen.value = video.volume * 100;
					video.play();
				break;
				case "Pause": 
					video.pause();
				break;
				case "Stop": 	
					video.pause();
					video.currentTime = 0;
				break;
				case "Begin": 	
					video.pause();
					video.currentTime = 0;
					video.play();
				break;
				case "Backward": 
					if ((video.currentTime - 10) >= 0) {
						video.currentTime -= 10;
					} else video.currentTime = 0;
				break;
				case "Forward": 
					if ((video.currentTime + 10) <= video.duration){
						video.currentTime += 10;
					} else video.currentTime = video.duration;
						 
				break; 
				case "End":
					video.currentTime = video.duration;
				break;
				case "FullScreen":
				break;
			}
		}
	}

	function videoDuration(e){
		videoProgress.value = video.currentTime/video.duration * 100;
	}

	function audioFunction(e){
		if (videoLoaded) {
			video.volume = parseInt(videoVolumen.value) / 100;
		}
	}

	function playFunction(e){
		if (this.pause) { this.play();}
		else this.pause();
	}

	function videoSelect(e){
		//target
		//modernizer
	}

	if (buttonElements.length){
		for (var i = 0; i < buttonElements.length; i++) {
			buttonElements[i].addEventListener('click', buttonFunction, false);
		}
	}

	videoVolumen.addEventListener('input', audioFunction, false);

	video.addEventListener('timeupdate'	, videoDuration, 	false);
	video.addEventListener('canplay'	, canplayFunction, 	false);
	video.addEventListener('click'		, playFunction, 	false);
	playlist.addEventListener('click'	, videoSelect, 		false);

};
