// Reference the display element once to use in all functions
const display = document.getElementById('display');

/**
 * Adds numbers or operators to the display
 * @param {string} input - The value of the button clicked
 */
function appendToDisplay(input) {
    display.value += input;
}

/**
 * Resets the display to an empty string
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Performs the calculation using the eval() function
 */
function calculate() {
    try {
        // eval takes the string (e.g., "12+5") and turns it into math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
