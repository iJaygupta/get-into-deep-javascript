let mammal = function (legs, isDomesticated) {
    this.legs = legs;
    this.isDomesticated = isDomesticated;
    this.handler = () => {
        inner = () => {
            console.log("inner function this", this);
        }
        console.log(`Mammal has ${this.legs} legs and isDomesticated ${isDomesticated}`);
        inner();
    }
}

let cat = new mammal(4, true);
let octopus = new mammal(8, false);
cat.handler();
octopus.handler();