let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        const result = evaluateExpression(currentInput);
        document.getElementById('display').value = result;
        currentInput = result; 
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function evaluateExpression(expression) {

    expression = expression.replace(/(\d+)\^(\d+)/g, (match, base, exponent) => Math.pow(base, exponent));
    expression = expression.replace(/√(\d+)/g, (match, number) => Math.sqrt(number));
    return Function('"use strict";return (' + expression + ')')();
}