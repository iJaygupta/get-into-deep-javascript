var mammal = function (legs, isDomesticated) {
    this.legs = legs;
    this.isDomesticated = isDomesticated;
}

mammal.prototype.walk = function () {
    console.log(`${this.name} is walking`);
}

mammal.prototype.getDetails = function () {
    console.log(`Legs count ${this.legs}`);
    console.log(`isDomesticated ${this.isDomesticated}`);

}




let lion = new mammal(4, true);
let tiger = new mammal(4, true);

lion.getDetails();
tiger.getDetails();
