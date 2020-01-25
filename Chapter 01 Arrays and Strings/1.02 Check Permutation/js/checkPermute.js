console.log("You have connected to the matrix. JavaScript file succesfully linked");
// console.log(true);
// console.log(false);

let checkPermute = (input1, input2) => {
  console.log("The first string is: " + input1)
  console.log("The second string is: " + input2)

  // If different lengths, return false
  // Note: If false due to different lengths, also make sure to console log here as well
  if(input1.length !== input2.length){
    console.log("Are the two strings permutations of one another? ", input1.length === input2.length);
    console.log("Nah bruv");
    return false;

  // else sort and compare
  } else {
    let sortedInput1 = input1.split("").sort().join("");
    let sortedInput2 = input2.split("").sort().join("");
    console.log("Are the two strings permutations of one another? ", sortedInput1 === sortedInput2);

    if (sortedInput1 === sortedInput2){
      console.log("Hell yeah, I ship them");
    } else {
      console.log("Nah bruv");
    }
    return sortedInput1 === sortedInput2;
  }
}

const javaPairs = [["apple", "papel"], ["carrot", "tarroc"], ["hello", "llloh"], ["Hello", "Hello"]];
const jsPairs = [["aba", "aab"], ["aba", "aaba"], ["aba", "aa"], ["abc", "aab"]];

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