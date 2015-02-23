(function() {
    var factorial = function(number) {
    	if ((number) && (typeof number === 'number' )&&( number >= 0)) {
	        if (number == 1) {return  1;}
	        else number *= factorial(number -1);
	        return number;
    	} 
    	return false;
    };

    console.log("factorial de 2 = " + factorial(2));
    console.log("factorial de 3 = " + factorial(3));
    console.log("factorial de 4 = " + factorial(4));
    console.log("factorial de 5 = " + factorial(5));
    console.log("factorial de '6' = " + factorial("6"));
    console.log("factorial de '' = " + factorial());

})();
