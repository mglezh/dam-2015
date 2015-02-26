HTMLFormElement.prototype.validate = function() {

	var validatorMsg = "";

	var validator = {
		required : function(val) {
			if (val && typeof val === "string") {return true;}
			else return false;
		},
		email : function(val){
			var exp = /^\w([\w\-.]*\w+)?@[a-zA-Z0-9]([\w\-.]*\w+)?\.[a-zA-z]{2,3}$/;
			if (exp.test(val)) {return true;}
			else return false;
		},
		checkbox : function(checked){
			if (checked) {return true;}
			else return false;
		},
		password: function (val){
			var exp1 = /\w{6,}/;
			var exp2 = /[a-z]{1,}/;
			var exp3 = /[A-Z]{1,}/;
			var exp4 = /[0-9]{1,}/;
			if (exp1.test(val) && 
				exp2.test(val) && 
				exp3.test(val) && 
				exp4.test(val)) return true;
			else return false;
		}
	};

	var checkedRequired = false;
	var checked = false;

	var validateInput = function (input){
		if ((input.classList.length !== 0) && 
			input.classList.contains('required')){
			if (!validator.required(input.value)) {
				validatorMsg += "	Rellene el campo. " + input.name + '\n';
			} else { 
				// Si el campo value tiene contenido lo valido para email y pass
				if (input.classList.contains('email')) {
					if (!validator.email(input.value)){ 
						validatorMsg += "	El campo mail no es válido. \n";
					}
				}
				if (input.type === "password"){
					if (!validator.password(input.value)){
						validatorMsg += "	El campo password no es válido. \n";
					}
				} 
			}
			if (input.type === "checkbox"){
				checkedRequired = true;
				if (validator.checkbox(input.checked)){
					checked = true;
				}
			} 
		} 					
	};

	var validate = function(e){
		var evento = e || window.event;
		evento.preventDefault();

		switch (evento.type) {
			case "blur"	  : 
				var input = evento.target;
				if (input.type === "text" ||
					input.type === "checkbox" ||
					input.type === "password") {
					validatorMsg += "Validando entrada.";
					validateInput(input);
					console.log(validatorMsg);
					validatorMsg = "";
				}
				break;
			case "submit" : 
				validatorMsg += "Validando formulario. \n";
				checkedRequired = false;
				checked = false;

				for (var i = 0; i <this.length; i++) validateInput(this[i]);

				if (checkedRequired && !checked) {
					validatorMsg += "	Tiene que seleccionar una condición \n";
				}
				console.log(validatorMsg);
				validatorMsg = "";
		}
	};

	this.addEventListener('submit', validate, false);
	var formElements = this.querySelectorAll('.required');
	for (var i = 0; i < formElements.length; i++)
		formElements[i].addEventListener('blur',   validate, false);
};
