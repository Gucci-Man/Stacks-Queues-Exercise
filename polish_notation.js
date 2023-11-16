const Stack = require('./stack'); // Import the Stack class

function calc(expression) {
    const stack = new Stack();

    // Tokenize the expression into operators and operands
    const tokens = expression.split(' ');

    // Process tokens
    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];

        if (!isNaN(parseFloat(token))) {
            // If the token is a number, push it onto the stack
            stack.push(parseFloat(token));
        } else {
            // If the token is an operator, pop two operands from the stack, apply the operator, and push the result back
            const operand1 = stack.pop();
            const operand2 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error(`Unsupported operator: ${token}`);
            }
        }
    }

    // The final result is on the top of the stack
    return stack.pop();
}

// Example usage:
console.log(calc("+ 1 2"));      // Output: 3
console.log(calc("/ 6 - 4 2"));  // Output: 3
