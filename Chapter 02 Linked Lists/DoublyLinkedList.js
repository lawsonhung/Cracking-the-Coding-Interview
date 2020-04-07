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

  /**
   * Get node by index
   * @return {Node}
   */
  get(index) {
    // If list is empty, or index is less than 0, or index is greater than or equal to list length, return null
    if (!this.length || index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode;

      // If the desired node is in the bottom of the list
      if (index < this.length / 2) {
        // Add counter, starting from 0 and count upwards in the loop
        let counter = 0;

        // Start from head node
        currentNode = this.head;

        // Go to the next node until we find the desired node
        while (counter < index) {
          currentNode = currentNode.next;
          counter++;
        }
      } else {
        // Add counter, starting from the top and counting downwards in the loop
        let counter = this.length - 1;

        // Start from the tail node
        currentNode = this.tail;

        // Go the the previous node until we find the desired node
        while (counter > index) {
          currentNode = currentNode.prev;
          counter--;
        }
      }

      // Return node
      return currentNode;
    }
  }

  set(index, value) {
    // Find the node to change
    const nodeToChange = this.get(index);

    // If the node exists
    if (nodeToChange) {
      // Update the value of the node
      nodeToChange.value = value;
      // Return the updated node
      return nodeToChange;
    } else {
      // If we can't find the node: return null
      return null;
    }
  }

  /**
   * Implementing splice, inserting a node at a given index
   * @return {Node}
   */
  insert(index, value){
    // If index is less than 0 or if index is greater than the list's length, return null
    if (index < 0 || index > this.length){
      return null;
    // If index equals 0, use this.unshift(value)
    } else if (index === 0){
      return this.unshift(value);
    // If index equals length, use this.push(value)
    } else if (index === this.length){
      return this.push(value);
    } else {
      // Create a new node
      const nodeToInsert = new Node(value);

      // Find the node that is currently before the desired place and connect it to the new node
      const prev = this.get(index - 1);
      nodeToInsert.prev = prev;
      prev.next = nodeToInsert;

      // Find the node that is currently at the desired place and connect it to he new node
      const next = this.get(index);
      next.prev = nodeToInsert;
      nodeToInsert.next = next;

      // Increment the list's length by 1
      this.length++;

      // Return the new node
      return nodeToInsert;
    }
  }

  /**
   * Removes a node at index
   * @return {Node}
   */
  remove(index){
    // If list is empty, index is less than 0, greater than or equal to the list's length, return null
    if (!this.length || index < 0 || index >= this.length){
      return null;
      // If index equals 0, we want to remove the first node with shift()
    } else if (index === 0){
      return this.shift();
      // If we want to remove the last node, use pop()
    } else if (index === this.length - 1){
      return this.pop();
    } else {
      // Get the node we want to remove, the node before it and the node after it
      const nodeToRemove = this.get(index);
      const prevNode = this.get(index - 1);
      const nextNode = this.get(index + 1);

      // Remove the connections from the node to other nodes
      nodeToRemove.next = null;
      nodeToRemove.prev = null;

      // Update the connections from the node before the node to remove
      prevNode.next = nextNode;

      // Update the connections from the node after the node to remove
      nextNode.prev = prevNode;

      // Decrement length by 1
      this.length--;
      
      // Return node
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



/////////////////////////// Testing DoublyLinkedList.get()
console.log("-----------------------------------------------");
console.log("Testing get(index)");
const getDLL = new DoublyLinkedList();
getDLL.push("A");
getDLL.push("B");
getDLL.push("C");

console.log("getDLL.get(-1): ", getDLL.get(-1));
// null

console.log("getDLL.get(0): ", getDLL.get(0));
// Node {
//   value: 'A',
//   prev: null,
//   next: Node {
//     value: 'B',
//     prev: [Circular],
//     next: Node { value: 'C', prev: [Circular], next: null }
//   }
// }

console.log("getDLL.get(1): ", getDLL.get(1));
// Node {
//   value: 'B',
//   prev: Node { value: 'A', prev: null, next: [Circular] },
//   next: Node { value: 'C', prev: [Circular], next: null }
// }

console.log("getDLL.get(2): ", getDLL.get(2));
// Node {
//   value: 'C',
//   prev: Node {
//     value: 'B',
//     prev: Node { value: 'A', prev: null, next: [Circular] },
//     next: [Circular]
//   },
//   next: null
// }

console.log("getDLL.get(3): ", getDLL.get(3));
// null

//////////////////////// Testing DoublyLinkedList.set(index, value)
console.log("--------------------------------------");
console.log("Testing set(index, value)");
const setDLL = new DoublyLinkedList();
setDLL.push("A");
console.log("setDLL after pushing: ", setDLL);
console.log("setDLL.set(-1, 'too low'): ", setDLL.set(-1, "too low"));
// null
console.log("setDLL.set(0, 'Updated A')", setDLL.set(0, "Updated A"));
// Node { value: 'Updated A', prev: null, next: null }
console.log("setDLL.set(1, 'too high'): ", setDLL.set(1, 'too high'));
// null

///////////////////////// Testing DoublyLinkedList.insert(index, value)
console.log("---------------------------------------------");
console.log("Testing insert(index, value)");
const insertDLL = new DoublyLinkedList();
console.log("insertDLL.insert(-1, 'too low'): ", insertDLL.insert(-1, "too low"));
// null
console.log("insertDLL.insert(0, 'at 0'): ", insertDLL.insert(0, 'at 0'));
// Node { value: 'at 0', prev: null, next: null }
console.log("insertDLL.insert(1, 'at 1'): ", insertDLL.insert(1, 'at 1'));
// Node {
//   value: 'at 1',
//   prev: Node { value: 'at 0', prev: null, next: [Circular] },
//   next: null
// }
console.log("insertDLL.insert(1, 'new at 1'): ", insertDLL.insert(1, 'new at 1'));
// insertDLL.insert(1, 'new at 1'):  Node {
//   value: 'new at 1',
//   prev: Node { value: 'at 0', prev: null, next: [Circular] },
//   next: Node { value: 'at 1', prev: [Circular], next: null }
// }
console.log("insertDLL after testing insertDLL.insert(index, value)", insertDLL);



//////////////////////////////// Testing DoublyLinkedList.remove(index)
console.log("-----------------------------------");
console.log("Testing DoublyLinkedList.remove(index)");
const removeDLL = new DoublyLinkedList();
removeDLL.push("A");
removeDLL.push("B");
removeDLL.push("C");
console.log("removeDLL.remove(-1): ", removeDLL.remove(-1));
// null
console.log("removeDLL.remove(5): ", removeDLL.remove(5));
// null
console.log("removeDLL.remove(0): ", removeDLL.remove(0));
// Node { value: 'A', prev: null, next: null }
console.log("removeDLL.remove(1): ", removeDLL.remove(1));
// Node { value: 'C', prev: null, next: null }
console.log("removeDLL after removing: ", removeDLL);
// DoublyLinkedList {
//   length: 1,
//   head: Node { value: 'B', prev: null, next: null },
//   tail: Node { value: 'B', prev: null, next: null }
// }

