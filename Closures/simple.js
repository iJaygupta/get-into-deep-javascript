function secretVariable() {
	var private = "Super Secret Code";
	return function () {
		return private;
	}
}

var getPrivateVariable = secretVariable();
console.log(getPrivateVariable()); 
