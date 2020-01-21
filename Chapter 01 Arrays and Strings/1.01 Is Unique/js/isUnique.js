// 1.1 Is Unique: Implement an algorithm to determine if a string has unique characters. What if you cannot use additional data structures?

// Pop up message
// alert("Hello world!");

// Logs to console
console.log("Hello World!");

const allUniqueChars = (input) => {

  // O(n^2) approach, no additional data structures used
  // For each character, check remaining characters for duplicates
  console.log("%c The current word is: " + input, "color: #FFA500");

  // NOTE: var VS let: var is scoped to the function body, while let is scoped to the immediate enclosing block.
  // thisVarCanBeAccessedOutsideOfForLoop is accessible here.
  // thisLetCannotBeAccessedOutsideOfForLoop is not accessible here.
  for (let i = 0; i < input.length; i++){
    var thisVarCanBeAccessedOutsideOfForLoop;
    let thisLetCannotBeAccessedOutsideOfForLoop;

    // Start comparing at 1 index ahead of i
    for (let j = i + 1; j < input.length; j++){
      // Case sensitive
      // If there is a repeat character, return false
      if(input[i] === input[j]){
        console.log("%c Oh no :( There are repeating characters in this word :( Breaking out of for loop now", "color: #F00");
        console.log("%c The FIRST repeating letter that was caught is: " + input[j], "color: #F00");
        return false;
      }
    }
  }

  // Else, if there is no match, return true
  console.log("%c YAY! All the characters in this word are unique. No repeat characters.", "background: #222; color: #0F0");
  return true;
};

const words = ["abcde", "hello", "apple", "kite", "paddle", "paddonnommo", "Congro"];

for (let i = 0; i < words.length; i++){
  console.log("\n");
  allUniqueChars(words[i]);
}