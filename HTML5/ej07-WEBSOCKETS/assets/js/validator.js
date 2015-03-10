// Se le agrega la función "validate" al prototipo de "form" para que sea válido 
// a todos los formularios
HTMLFormElement.prototype.validate = function() {

	var validator = {
		required : function(val) {
			return 	val.length > 0 &&
					val !== undefined &&
					val !== null &&
					!/^\s+$/.test(val);
		},
		email : function(val){
			var exp = /^\w([\w\-.]*\w+)?@[a-zA-Z0-9]([\w\-.]*\w+)?\.[a-zA-z]{2,3}$/;
			return exp.test(val);
		},
		password: function (val){
			return (/\w{6,}/.test(val) && 
					/[a-z]{1,}/.test(val) && 
					/[A-Z]{1,}/.test(val) && 
					/[0-9]{1,}/.test(val));
		}
	};

	var validatorMsg = "";

	var validateInput = function (input){
		// primero prueba que no esté vacio
		if (!validator.required(input.value)) {
			input.classList.add("has-error");
			validatorMsg += "	El campo " + input.name + " es obligatorio \n";
		} else { 
			input.classList.remove("has-error");
			// Si el campo value tiene contenido valido su contenido 
			// para email y pass
			if (input.classList.contains('email')) {
				if (!validator.email(input.value)){ 
					validatorMsg += "	El campo mail no es válido. \n";
					input.classList.add("has-error");
				} else input.classList.remove("has-error");
			}
			if (input.type === "password"){
				if (!validator.password(input.value)){
					validatorMsg += "	El campo password no es válido. \n";
					input.classList.add("has-error");
				} else input.classList.remove("has-error");
			} 
		}
		if (input.type === "checkbox"){
			if (!input.checked){
				validatorMsg += "	El campo " + input.name + " no está marcado. \n";
			}
		} 
	};

	var required = this.querySelectorAll(".required");

	var validate = function(e){
		var evento = e || window.event;
		var input = evento.target; //Solo para "focus" y "blur"

		switch (evento.type) {
			case "focus"  : 
				input.classList.remove("has-error");
				break;
			case "blur"	  : 
				validatorMsg += "Validando entrada.";
				validateInput(input);
				console.log(validatorMsg);
				validatorMsg = ""; 
				break;
			case "submit" : 
				console.log("Validando formulario. \n");

				for (var i = 0; i <required.length; i++) {
					validateInput(required[i]);
				}

				if (validatorMsg.length) {
					console.log(validatorMsg);
					alert(validatorMsg);
					validatorMsg = "";
					evento.preventDefault();
				} break;
		}
	};

	this.addEventListener('submit', validate, false);
	for (var i = 0; i < required.length; i++) {
		required[i].addEventListener('blur',   validate, false);
		required[i].addEventListener('focus',  validate, false);
	}
};
