const Stack = require('./stack'); // Import the Stack class

function reverseStringWithStack(inputString) {
  const stack = new Stack(); // Create a new stack

  // Push each character onto the stack
  for (let char of inputString) {
    stack.push(char);
  }

  // Pop characters from the stack to construct the reversed string
  let reversedString = '';
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage:
const input = 'Hello, World!';
const reversed = reverseStringWithStack(input);

console.log('Original String:', input);
console.log('Reversed String:', reversed);
