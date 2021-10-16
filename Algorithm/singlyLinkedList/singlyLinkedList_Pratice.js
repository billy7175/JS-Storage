class Node {
    constructor (val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {   
    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
    }
}


var list = new SinglyLinkedList()
list.push('Hello')
console.log(list)