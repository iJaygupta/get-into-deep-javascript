function LinkedList() {
    let length = 0;
    let head = null;

    function Node(element) {
        this.element = element;
        this.next = null;
    }

    this.head = () => head;

    this.size = () => length;

    this.add = element => {
        const node = new Node(element);
        if (head) {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        else {
            head = node;
        }
        length++;
    };
}

let list = new LinkedList();
list.add('proptotype');
list.add('factory');
list.add('singleton');
list.add('object');
list.add('order');


console.log(JSON.stringify(list.head()));
console.log(list.size());


