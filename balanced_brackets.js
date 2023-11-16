const Queue = require('./queue'); // Import the Queue class

function isBalanced(inputString) {
  const queue = new Queue(); // Create a new queue to keep track of open brackets

  // Define a mapping of open and close brackets
  const bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  // Iterate through each character in the input string
  for (let char of inputString) {
    // If the character is an open bracket, enqueue it
    if (bracketMap.hasOwnProperty(char)) {
      queue.enqueue(char);
    } else if (Object.values(bracketMap).includes(char)) {
      // If the character is a close bracket
      // Check if the corresponding open bracket is at the front of the queue
      const openBracket = queue.isEmpty() ? null : queue.dequeue();
      
      // If the brackets don't match, the string is not balanced
      if (bracketMap[openBracket] !== char) {
        return false;
      }
    }
  }

  // If there are remaining open brackets in the queue, the string is not balanced
  return queue.isEmpty();
}

// Example usage:
const balancedString = '{[()]}' // Balanced string
const unbalancedString = '{[()}' // Unbalanced string

console.log('Is balanced:', isBalanced(balancedString)); // Should print true
console.log('Is balanced:', isBalanced(unbalancedString)); // Should print false
