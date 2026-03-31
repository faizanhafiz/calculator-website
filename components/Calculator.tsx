// Custom safe evaluator function
function safeEval(expr) {
    // Replace percentage and handle operations
    const percentageRegex = /\b(\d+(\.\d+)?)%/g;
    expr = expr.replace(percentageRegex, (match, number) => number / 100);

    // Allowed characters and operators
    const allowedCharacters = /^[0-9+\-*/(). ]+$/;
    if (!allowedCharacters.test(expr)) {
        throw new Error('Invalid characters in expression');
    }

    // Evaluating without direct 'eval' usage
    const parse = new Function('return ' + expr);
    return parse();
}

// Example usage
// let result = safeEval('20 + 30 * 0.5'); // returns 35

// The original functionality of the calculator, handling backspace and clear should be here

// ... Existing code remains unaffected ...

