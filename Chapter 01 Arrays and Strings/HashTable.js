// In terminal, run with
// $ node --experimental-modules HashTable.js
// This allows you to import modules in ES6 format/syntax
// Looks for the closest parent `package.json` file
// Make sure the closest package.json file contains the key-value pair: 
 /**
 * {
 *   "type": "module"
 * }
 */
class HashTable {

  constructor() {
    this.data = [];
    this.size = 0;
  }

  // Create a hash table by adding up all the UTF-16 values of each letter in the string
  hash = (key) => {
    const chars = key.split('');
    const charCodes = chars.map(char => char.charCodeAt());
    const charCodeSum = charCodes.reduce((acc, cur) => acc + cur);
    return charCodeSum;
  }

  // Add a key-value pair
  set(key, value) {
    // Hash the key
    const hash = this.hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    this.data[hash].push([key, value]);

    this.size++;
  }
}

//  console.log("hash('name): ", hash('name'));
// 417

const newHashTable = new HashTable();
console.log("newHashTable: ", newHashTable);
// console.log("newHashTable.hash('name'): ", newHashTable.hash('name'));

newHashTable.set("name", "miku86");
console.log(newHashTable.data);

newHashTable.set("mean", false);
console.log(newHashTable.data);

newHashTable.set("age", 33);
console.log(newHashTable.data);