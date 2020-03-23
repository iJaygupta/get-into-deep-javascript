var printer = (function () {

    var printerInstance;

    function create() {

        function print() {
            // underlying printer mechanics
        }

        function turnOn() {
            // warm up
            // check for paper
        }

        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn
        };
    }

    return {
        getInstance: function () {
            if (!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    };

    function Singleton() {
        if (!printerInstance) {
            printerInstance = intialize();
        }
    };

})();

let instance1 = printer.getInstance();
let instance2 = printer.getInstance();
let instance3 = printer.getInstance();

console.log(instance1);
console.log(instance1);
console.log(instance3);