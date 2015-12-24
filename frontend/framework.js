this.alphanumeric = function (input) {  
	// Thanks to
	// * http://www.w3resource.com/javascript/form/letters-numbers-field.php
	var letterNumber = /^[0-9a-zA-Z]+$/;

	return input.match(letterNumber);
}; 