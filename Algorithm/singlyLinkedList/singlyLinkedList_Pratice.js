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
        } else {
            // *** 중요 순서 고정 ***
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++;
        return this 
    }
}


var list = new SinglyLinkedList()
list.push('Hello')
list.push('You')
list.push('Billy')
list.push('Emily')
list.push('Welcome')

console.log(list)
// for(i in list){
//     console.log(i)
// }