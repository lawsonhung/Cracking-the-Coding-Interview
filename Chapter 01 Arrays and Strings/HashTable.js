// Source: https://dev.to/miku86/javascript-data-structures-hash-table-intro-3nce

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

  // Get data given a key
  get = key => {
    const hash = this.hash(key);

    if (this.data[hash]) {
      // for (const element of this.data[hash]) {
      //   if (element[0] === key) {
      //     return element;
      //   }
      // }

      let elementFound = null;
      this.data[hash].forEach(element => {
        if (element[0] === key) {
          elementFound = element;
        }
      })
      return elementFound;
    } else
    return null;
  }

  keys = () => {
    const keys = [];

    this.data.forEach(bucket => {
      if (bucket) {
        bucket.forEach(item => {
          keys.push(item[0]);
        })
      }
    })

    // for (const bucket of this.data) {
    //   if (bucket) {
    //     for (const item of bucket) {
    //       keys.push(item[0]);
    //     }
    //   }
    // }

    return keys;
  }

  values = () => {
    const values = [];

    this.data.forEach(bucket => {
      if (bucket) {
        bucket.forEach(item => {
          values.push(item[1]);
        })
      }
    })

    return values;
  }

  entries = () => {
    const entries = [];

    this.data.forEach(bucket => {
      if (bucket) {
        bucket.forEach(item => {
          entries.push(item);
        })
      }
    })

    return entries;
  }
}

//  console.log("hash('name): ", hash('name'));
// 417

const newHashTable = new HashTable();
console.log("newHashTable: ", newHashTable);
// console.log("newHashTable.hash('name'): ", newHashTable.hash('name'));

console.log("\nTesting set(key, value)");
newHashTable.set("name", "miku86");
console.log(newHashTable.data);
newHashTable.set("mean", false);
console.log(newHashTable.data);
newHashTable.set("age", 33);
console.log(newHashTable.data);

console.log("\nTesting get(key)");
console.log(newHashTable.get("name"));
// [ 'name', 'miku86' ]
console.log(newHashTable.get("mean"));
// [ 'mean', false ]
console.log(newHashTable.get("age"));
// [ 'age', 33 ]
console.log(newHashTable.get("nothing to see"));
// null
console.log(newHashTable.get("naem"));
// null

console.log("\nTesting keys()");
console.log(newHashTable.keys());
// [ 'age', 'name', 'mean' ]

console.log("\nTesting values()");
console.log(newHashTable.values());
// [ 33, 'miku86', false ]

console.log("\nTesting entries()");
console.log(newHashTable.entries());
// [['age', 33], ['name', 'miku86'], ['mean', false]]

