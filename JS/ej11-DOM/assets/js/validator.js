HTMLFormElement.prototype.validate = function() {
	var validator = {
		required : function(val) {
			return false;
		},

		email : function(val){
			return false;
		}
	};

	var required = this.querySelectorAll('.required');

	var validate = function(){

	};


	this.addEventListener('submit', validate, false);
};
