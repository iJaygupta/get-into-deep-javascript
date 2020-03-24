let add = function (c, d, e) {
    console.log(this.a + this.b + c + d + e);
}

let obj = {
    a: 1,
    b: 2
}

let dragonArray = [6, 9, 8];

add.apply(obj, dragonArray);
