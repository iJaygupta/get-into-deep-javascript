let button = function (content) {
    this.content = content;
}

button.prototype.click = function () {
    console.log(`${this.content} clicked`)
}

let newButton = new button('add');
let looseClick = newButton.click;

looseClick(); // Output : undefined clicked

let boundButton = newButton.click.bind(newButton);
boundButton(); // Output : add clicked

let myObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log('parse called');
    },
    render() {
        this.asyncGet(function () {
            this.parse();
        }.bind(this))
    }
}

myObj.render(); // Output : parse called