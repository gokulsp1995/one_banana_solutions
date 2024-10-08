// One banana solutions

const numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]; //Declaring the list of numbers, can extend to more numbers

// Declaring an empty array to store the modified values
let output = [];
// Entering a loop to iterate the array elements
for (let num in numbers) {
  let result = numbers[num]; //Assigning each array elements to a new variable for performing operations  

  let includes_I = result.toLowerCase().includes("i"); //Checking for Capital and small letter "i"
  let includes_E = result.toLowerCase().includes("e"); //Checking for Capital and small letter "e"

  if (includes_I && includes_E) { //for numbers having both i and e
    result += " yipes";        //string addition to include the required values
  }
  else if (includes_I) {
    result += " yip";
  }
  else if (includes_E) {
    result += " yep";
  }

  output.push(result);
}
console.log("Array", output);  //The result in an array

let string_list = output.join(" ");
console.log("Answer in string:", string_list); // result in string format

