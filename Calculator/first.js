const display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.innerText[display.innerText.length - 1];
    if (!isNaN(lastChar) || lastChar === '%') {
        display.innerText += operator;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
