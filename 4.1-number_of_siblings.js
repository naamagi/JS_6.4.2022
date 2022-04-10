let numSiblings = +window.prompt("How many siblings do you have?");

console.log(typeof(numSiblings));
if (numSiblings === 1) {
  console.log("1 sibling!");

} else if (numSiblings > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}

// 6. When I use === I get a wrong answer because === checks types as well. 
// Since  the input from prompt() is a string, numSiblings is a string, 
// therefore does not equal to the type of number 1.

// 8. We want to check if the number is correct, therefore we need to change 
// the string into a number before we compare it to the number 1. We use === to check if 
// the value matches the value of 1. if I don't use ===, I mistakenly get true, 
// although the types don't match.