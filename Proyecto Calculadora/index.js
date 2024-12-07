window.alert("Bienvenido papu a la calculadora fantasticamente megagaláctica");

let value1 = null;
let value2 = null;
let operator = null;
let result = null;

document.getElementById('clear').onclick = function () {
    document.getElementById("numberfield").value = 0;
    value1 = null;
    value2 = null;
    operator = null;
    result = null;
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');
        const display = document.getElementById("numberfield");

        if (!isNaN(value) || value === '.') {
            if (display.value === "0" || (operator && value2 === null)) {
                display.value = value;
            } else {
                display.value += value;
            }
            if (operator === null) {
                value1 = parseFloat(display.value);
            } else {
                value2 = parseFloat(display.value);
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (value1 !== null) {
                operator = value;
                display.value = '';
            }
        } else if (value === '=') {
            calcularResultado();
        }
    });
});

function calcularResultado() {
    if (value1 !== null && value2 !== null && operator) {
        switch (operator) {
            case '+':
                result = value1 + value2;
                break;
            case '-':
                result = value1 - value2;
                break;
            case '*':
                result = value1 * value2;
                break;
            case '/':
                result = value2 !== 0 ? value1 / value2 : 'Error';
                break;
        }
        document.getElementById("numberfield").value = result;
        value1 = result;
        value2 = null;
        operator = null;
    }
}

document.getElementById("result").onclick = calcularResultado;