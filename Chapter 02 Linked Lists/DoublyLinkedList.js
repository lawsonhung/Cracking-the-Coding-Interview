// Source: https://dev.to/miku86/javascript-data-structures-doubly-linked-list-intro-and-setup-275b
import { Node } from './Node.js';
// In terminal, run with
// $ node --experimental-modules DoublyLinkedList.js
// This allows you to import modules in ES6 format/syntax

// A Node has a value, a pointer to the previous node (= prev), a pointer to the next node (= next)
// class Node{
//   constructor(value){
//     // this refers to the current instance of Node
//     // Used like: node1.value, node1.prev, node1.next
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }


// A Doubly Linked List has a length, a beginning (= head), an end (= tail)
class DoublyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * 
   * @return {Node}
   */
  push(value){
    // Create a new node
    const newNode = new Node(value);

    // If the list is empty, the new node should become the head and tail
    if(!this.length){
      this.head = newNode;
      this.tail = newNode;
    } else {
      // The current tail should point forward (= next) to the new node
      this.tail.next = newNode;

      // The new node should point back (= prev) to the current tail
      newNode.prev = this.tail;

      // The new node should become the new tail
      this.tail = newNode;
    }

    // Increment length by 1
    this.length++;

    // Return new node
    return newNode;
  }

  /**
   * @return {Node}
   */
  pop(){
    // No node in the list so it's empty, therefore return null
    // this.length = false if empty, so !this.length returns true
    if(!this.length){
      return null;
    } else {
      // Save current tail to return to later
      const nodeToRemove = this.tail;

      if(this.length === 1){
        // After removing the only node, there will be no head and tail
        this.head = null;
        this.tail = null;
      } else {
        // Set the node before the current tail as the new tail
        this.tail = this.tail.prev;
        // Remove the connection from the new tail to the old tail, after reassigning the new tail
        this.tail.next = null;
        // Remove the connection from the old tail to the next tail
        nodeToRemove.prev = null;
      }

      // Decrement length by 1
      this.length--;

      // Return old tail
      return nodeToRemove;
    }
  }
}

/////////////////////// Testing initializing new Node
console.log("Testing creating new Node");
const newNode = new Node(1);
console.log("newNode: ", newNode);
// Node { value: 1, prev: null, next: null }
console.log("newNode.value: ", newNode.value);
// 1
console.log("newNode.prev: ", newNode.prev);
// null
console.log("newNode.next: ", newNode.next);
// null



////////////////// Testing DoublyLinkedList.push();
console.log("\nTesting push");
// Empty list
const newDLL = new DoublyLinkedList();
console.log("newDLL: ", newDLL);
// newDLL:  DoublyLinkedList { length: 0, head: null, tail: null }
// Push first new node
const newNode1 = newDLL.push("new node 1");
console.log("Pushing new node and returning newly pushed node: ", newNode1);
// Node { value: 'new node 1', prev: null, next: null }
console.log("newDLL after pushing newNode1: ", newDLL);
// DoublyLinkedList {
//   length: 1,
//   head: Node { value: 'new node 1', prev: null, next: null },
//   tail: Node { value: 'new node 1', prev: null, next: null }
// }

// Push second new node
const newNode2 = newDLL.push("new node 2");
console.log("Pushing new node and returning newly pushed node: ", newNode2);
// Node {
//   value: 'new node 2',
//   prev: Node { value: 'new node 1', prev: null, next: [Circular] },
//   next: null
// }
console.log("newDLL after pushing newNode2: ", newDLL);
// DoublyLinkedList {
//   length: 2,
//   head: Node {
//     value: 'new node 1',
//     prev: null,
//     next: Node { value: 'new node 2', prev: [Circular], next: null }
//   },
//   tail: Node {
//     value: 'new node 2',
//     prev: Node { value: 'new node 1', prev: null, next: [Circular] },
//     next: null
//   }
// }



///////////////////// Testing DoublyLinkedList.pop();
console.log("\nTesting pop()");
const newDLLPop = new DoublyLinkedList();
newDLLPop.push("A");
newDLLPop.push("B");
newDLLPop.push("C");
console.log("newDLLPop after pushing: ", newDLLPop);
// DoublyLinkedList {
//   length: 3,
//   head: Node {
//     value: 'A',
//     prev: null,
//     next: Node { value: 'B', prev: [Circular], next: [Node] }
//   },
//   tail: Node {
//     value: 'C',
//     prev: Node { value: 'B', prev: [Node], next: [Circular] },
//     next: null
//   }
// }
console.log("This node is being popped out: ", newDLLPop.pop());
// Node { value: 'C', prev: null, next: null }
console.log("newDLLPop after popping: ", newDLLPop);
// DoublyLinkedList {
//   length: 2,
//   head: Node {
//     value: 'A',
//     prev: null,
//     next: Node { value: 'B', prev: [Circular], next: null }
//   },
//   tail: Node {
//     value: 'B',
//     prev: Node { value: 'A', prev: null, next: [Circular] },
//     next: null
//   }
// }


