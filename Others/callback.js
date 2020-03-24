let a = function () {
    console.log("I am called from inside a function");
}

let b = function (callback) {
    console.log("Do something !!");
    callback();
}

b(a);

// Callback Functions 

let add = function(a, b){
  return a+b;
}

let multiply = function(a, b){
    return a*b;
}

let calc = function(num1, num2, callback){
   return callback(num1 , num2);
}