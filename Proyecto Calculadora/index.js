window.alert("Bienvenido papu a la calculadora fantasticamente megagaláctica");

let value1 = null;
let value2 = null;
let operator = null;
let result = null;
document.getElementById('clear').onclick=function borrar(){
    document.getElementById("numberfield").value=0;
}

const btn=document.querySelectorAll("#btn");
btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    document.getElementById("numbarfield").value=btn;
    if (!isNaN(value) || value === '.') {
        const display = document.getElementById("numberfield");
        if (display.value === "0" || operator && value2 === null) {
            display.value = value;
        } else {
           display.value += value;
        }
        if (operator === null) {
            value1 = parseFloat(display.value);
        } else {
            value2 = parseFloat(display.value);
        }
    } 
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        document.getElementById("numberfield").value = '';
    }
});


function operador(){
    let operator=document.getElementById("operator").value;
}
document.getElementById("result").onclick = function resultado() {
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
                result = value2 !== 0 ? value1 / value2 : 'Error, no es posible dividir entre Cero';
                break;
        }
        document.getElementById("numberfield").value = result;
        value1 = result;
        value2 = null;
        operator = null;
    }
};