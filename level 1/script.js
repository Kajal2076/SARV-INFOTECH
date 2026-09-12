const display = document.getElementById("display");

let expression = "";


// Add value
function addValue(value) {

    if (expression === "Error") {
        expression = "";
    }

    expression += value;

    display.value = expression;
}


// AC
function clearDisplay() {

    expression = "";

    display.value = "";
}


// DEL
function deleteLast() {

    expression = expression.slice(0, -1);

    display.value = expression;
}


// Calculate
function calculate() {

    if (expression === "") {
        return;
    }

    try {

        let result = eval(expression);

        if (!isFinite(result)) {
            throw new Error();
        }

        result = Number(result.toFixed(10));

        expression = result.toString();

        display.value = expression;

    } catch (error) {

        expression = "Error";

        display.value = "Error";
    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (key >= "0" && key <= "9") {
        addValue(key);
    }

    else if (key === "+" || key === "-" ||
             key === "*" || key === "/") {
        addValue(key);
    }

    else if (key === ".") {
        addValue(".");
    }

    else if (key === "(" || key === ")") {
        addValue(key);
    }

    else if (key === "Enter" || key === "=") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }
});