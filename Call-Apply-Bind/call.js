let add = function (c) {
    console.log(this.a + this.b + c);
}

let obj = {
    a: 1,
    b: 2
}

add.call(obj, 3);

let mammal = function (legs) {
    this.legs = legs;
}

let cat = function (legs, isDomesticated) {
    mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
}

let lion = new cat(4, false);
console.log(lion);




