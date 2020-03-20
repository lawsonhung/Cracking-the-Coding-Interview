// Works cited:
// https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Tree-Transversal

class TreeNode {
  constructor(value){
    this.value = value;
    this.descendents = [];
  }
}

// Test creating treenodes with values
const abe = new TreeNode('abe');
const homer = new TreeNode('homer');
const bart = new TreeNode('bart');
const lisa = new TreeNode('lisa');
const maggie = new TreeNode('maggie');

// Associate root with descendents/children array
abe.descendents.push(homer);
console.log("abe's value: ", abe.value);
// Descendents are an array of TreeNode instances
console.log("abe's descendent(s) in array form: ", abe.descendents);

homer.descendents.push(bart, lisa, maggie);
// abe still has 1 descendent TreeNode instance object (homer) with 3 descendents under homer
console.log("abe's descendent(s) in array form after adding descendents to homer: ", abe.descendents);
// homer's descendents are an array of 3 TreeNode instance objects
console.log("homer's descendent(s) after adding descendents to homer: ", homer.descendents);

