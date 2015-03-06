window.onload = function() {

	var formElements = document.querySelectorAll(".formElement");
	var prefix = "ej03_prefix_";

	for (var i = 0; i < formElements.length; i++) {
		if (localStorage.getItem(prefix + formElements[i].name))
			formElements[i].value = localStorage.getItem(prefix + formElements[i].name);
	}

	var saveInput =function() {
		localStorage.setItem(prefix + this.name, this.value);
	};

	for (i = 0; i < formElements.length; i++) {
		formElements[i].addEventListener('input', saveInput, false);
	}

	var showData = function(key, value){
		for (i = 0; i < formElements.length; i++) {
			if (prefix + formElements[i].name === key) {
				formElements[i].value = value;	
			}
		}
	};

	var handleStorage = function(e){
		showData(e.key, e.newValue);
	};

	window.addEventListener('storage', handleStorage);
};
