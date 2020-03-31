// Source: https://dev.to/miku86/javascript-data-structures-doubly-linked-list-intro-and-setup-275b

// A Node has a value, a pointer to the previous node ( = prev), a pointer to the next node (= next)
class Node{
  constructor(value){
    // this refers to the current instance of Node
    // Used like: node1.value, node1.prev, node1.next
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


// A Doubly Linked List has a length, a beginning (= head), an end (= tail)
class DoublyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
}

const newNode = new Node(1);
console.log("newNode: ", newNode);
// Node { value: 1, prev: null, next: null }
console.log("newNode.value: ", newNode.value);
// 1
console.log("newNode.prev: ", newNode.prev);
// null
console.log("newNode.next: ", newNode.next);
// null

const newDLL = new DoublyLinkedList();
console.log("newDLL: ", newDLL);
// newDLL:  DoublyLinkedList { length: 0, head: null, tail: null }
