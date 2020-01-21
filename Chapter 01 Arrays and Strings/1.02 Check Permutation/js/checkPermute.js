console.log("You have connected to the matrix. JavaScript file succesfully linked");
// console.log(true);
// console.log(false);

let checkPermute = (input1, input2) => {
  console.log("The first string is: " + input1)
  console.log("The second string is: " + input2)

  // If different lengths, return false
  if(input1.length !== input2.length){
    console.log("Are the two strings permutations of one another? ", input1.length === input2.length);
    return false;

  // else sort and compare
  } else {
    let sortedInput1 = input1.split("").sort().join("");
    let sortedInput2 = input2.split("").sort().join("");
    console.log("Are the two strings permutations of one another? ", sortedInput1 === sortedInput2);
    return sortedInput1 === sortedInput2;
  }
}

const javaPairs = [["apple", "papel"], ["carrot", "tarroc"], ["hello", "llloh"], ["Hello", "Hello"]];
const jsPairs = [["aba", "aab"], ["aba", "aaba"], ["aba", "aa"]];

// Iterate through javaPairs
for (let i = 0; i < javaPairs.length; i++){
  console.log("");
  checkPermute(javaPairs[i][0], javaPairs[i][1]);
};

// Iterate through jsPairs
for (let i = 0; i < jsPairs.length; i++){
  console.log("");
  checkPermute(jsPairs[i][0], jsPairs[i][1]);
}