var obj = {
	name: "xyz",
	age: function () {
		console.log("the This", this);
		console.log("regular function =>", this.name);
		test = () => {
			console.log("arrow inner function =>", this.name);
		}
		test();
		function test2() {
			console.log("regular inner function =>", this.name);
		}
		test2();
	},
	salary: () => {
		//console.log(this);
		console.log("arrow function", this.name);
	}
};


obj.age();
obj.salary();
