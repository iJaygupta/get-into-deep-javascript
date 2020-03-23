//  (ES5 version)
function Queue() {
    this.queue = [];
    this.add = function (item) {
        this.queue.unshift(item);
    }
    this.remove = function () {
        this.queue.pop();
    }
};

//  (ES6 version)
class Queue {
    constructor() {
        this.queue = []
    }

    add(item) {
        this.queue.unshift(item);
    }

    remove() {
        return this.queue.pop();
    }

    peek() {
        return this.queue[queue.length - 1];
    }
}