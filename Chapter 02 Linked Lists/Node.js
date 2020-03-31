// Source: https://dev.to/miku86/javascript-data-structures-doubly-linked-list-intro-and-setup-275b

// A Node has a value, a pointer to the previous node ( = prev), a pointer to the next node (= next)
export default class Node{
  // Syntax: new Node(value);
  constructor(value){
    // this refers to the current instance of Node
    // Used like: node1.value, node1.prev, node1.next
    this.value = value;
    // Initialize this.prev and this.next as null
    this.prev = null;
    this.next = null;
  }
}

// export default Node;