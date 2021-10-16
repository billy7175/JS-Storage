class Node {
    constructor (value){
        this.value = value
        this.next = null;
    }
    push(){}
    pop(){}
}

var first =new Node('HI~?')
first.next = new Node('I said I ya???')
first.next.next = new Node('Shit the fuck up')
console.log(first)