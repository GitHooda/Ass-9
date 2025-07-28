// Function to add number or operator to display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value; // Add value to current display
}

// Function to clear the display completely
function clearDisplay() {
    document.getElementById('display').value = ''; // Reset display to empty
}

// Function to delete the last character (backspace)
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove last character
}

// Function to calculate the result using eval
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and set result
        display.value = eval(display.value);
    } catch (error) {
        // If expression is invalid, show error
        display.value = 'Error';
    }
}
