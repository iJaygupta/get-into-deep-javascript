var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model';
}

TeslaModelS.prototype = function () {

    var go = function () {
        // Rotate wheels
    };

    var stop = function () {
        // Apply brake pads
    };

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }

}();