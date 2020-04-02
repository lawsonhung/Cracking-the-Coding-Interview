// Source: https://dev.to/miku86/javascript-data-structures-doubly-linked-list-intro-and-setup-275b
import { Node } from './Node.js';
// In terminal, run with
// $ node --experimental-modules DoublyLinkedList.js
// This allows you to import modules in ES6 format/syntax
// Looks for the closest parent `package.json` file
// Make sure the closest package.json file contains the key-value pair: 
 /**
 * {
 *   "type": "module"
 * }
 */
// Can be anywhere in the package.json file

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
   * Add node to end
   * Return newly added node
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
   * Remove node from end
   * Return removed node
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

  /**
   * Add node to beginning
   * Return newly added Node
   * @returns {Node}
   */
  unshift(value){
    // Create a new node
    const newNode = new Node(value);

    // If list is empty, set head and tail to new node
    // this.length = 0 = false when empty, so !this.length would return true when empty
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set new node's next to current head
      newNode.next = this.head;

      // Set the current head's prev to new node
      this.head.prev = newNode;

      // Set list's head to new node
      this.head = newNode;
    }

    // Increment length by 1
    this.length++;

    // return new node
    return newNode;
  }

  /**
   * Remove Node from beginning
   * Return removed node
   * @return {Node}
   */
  shift(){
    // If the list is empty, return null. We can't remove data from an empty list
    // this.length = 0 = false if empty, so !this.length returns true
    if (!this.length) {
      return null;
    }
    
    // Set head as nodeToRemove
    const nodeToRemove = this.head;

    // After removing the only element, the list will be empty, so head and tail will be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // The node after nodeToRemove becomes the new head
      this.head = nodeToRemove.next;

      // Remove both connections from the new head and the old head (nodeToRemove)
      this.head.prev = null;
      nodeToRemove.next = null;
    }

    // Decrement length by 1
    this.length--;

    // Return nodeToRemove
    return nodeToRemove;
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



////////////////// Testing DoublyLinkedList.push()
console.log("-------------------------------------------");
console.log("Testing push");
// Empty list
const pushDLL = new DoublyLinkedList();
console.log("pushDLL: ", pushDLL);
// pushDLL:  DoublyLinkedList { length: 0, head: null, tail: null }
// Push first new node
const newNode1 = pushDLL.push("new node 1");
console.log("Pushing new node and returning newly pushed node: ", newNode1);
// Node { value: 'new node 1', prev: null, next: null }
console.log("pushDLL after pushing newNode1: ", pushDLL);
// DoublyLinkedList {
//   length: 1,
//   head: Node { value: 'new node 1', prev: null, next: null },
//   tail: Node { value: 'new node 1', prev: null, next: null }
// }

// Push second new node
const newNode2 = pushDLL.push("new node 2");
console.log("Pushing new node and returning newly pushed node: ", newNode2);
// Node {
//   value: 'new node 2',
//   prev: Node { value: 'new node 1', prev: null, next: [Circular] },
//   next: null
// }
console.log("pushDLL after pushing newNode2: ", pushDLL);
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



///////////////////// Testing DoublyLinkedList.pop()
console.log("---------------------------------------");
console.log("Testing pop()");
const popDLL = new DoublyLinkedList();
popDLL.push("A");
popDLL.push("B");
popDLL.push("C");
console.log("popDLL after pushing: ", popDLL);
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
console.log("This node is being popped out: ", popDLL.pop());
// Node { value: 'C', prev: null, next: null }
console.log("popDLL after popping: ", popDLL);
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



//////////////////////// Testing DoublyLinkedList.unshift()
console.log("------------------------------------------------");
console.log("Testing unshift()");
const unshiftDLL = new DoublyLinkedList();
unshiftDLL.push("A");
console.log("unshiftDLL after pushing: ", unshiftDLL);
// DoublyLinkedList {
//   length: 1,
//   head: Node { value: 'A', prev: null, next: null },
//   tail: Node { value: 'A', prev: null, next: null }
// }
console.log("Unshifting unshiftDLL: ", unshiftDLL.unshift("0"));
// Node {
//   value: '0',
//   prev: null,
//   next: Node { value: 'A', prev: [Circular], next: null }
// }



///////////////////////////// Testing DoublyLinkedList.shift()
console.log("------------------------------------------------");
console.log("Testing shift()");
const shiftDLL = new DoublyLinkedList();
shiftDLL.push("A");
shiftDLL.push("B");
console.log("shiftDLL after pushing: ", shiftDLL);
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
console.log("Removed node from shifting shiftDLL: ", shiftDLL.shift());
// Node { value: 'A', prev: null, next: null }
console.log("shiftDLL after shifting: ", shiftDLL);
// DoublyLinkedList {
//   length: 1,
//   head: Node { value: 'B', prev: null, next: null },
//   tail: Node { value: 'B', prev: null, next: null }
// }



