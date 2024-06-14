let stack = [];

function displayStack() {
    const stackDisplay = document.getElementById('stackDisplay');
    stackDisplay.innerHTML = '';
    stack.forEach((element) => {
        const stackElement = document.createElement('div');
        stackElement.className = 'stack-element';
        stackElement.textContent = element;
        stackDisplay.appendChild(stackElement);
    });
}

function read() {
    const result = document.getElementById('readResult');
    if (stack.length > 0) {
        const topElement = stack[stack.length - 1];
        result.textContent = `Elemento superior: ${topElement}`;
    } else {
        result.textContent = 'La pila está vacía';
    }
}

function insert() {
    const value = document.getElementById('insertValue').value;
    if (value !== '') {
        stack.push(value);
        displayStack();
        document.getElementById('insertValue').value = '';
    } else {
        showMessage('No se puede ingresar un valor vacío', 'insertMessage');
    }
}

function del() {
    if (stack.length > 0) {
        stack.pop();
        displayStack();
    } else {
        alert('La pila está vacía');
    }
}

function showMessage(message, elementId) {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = message;
    setTimeout(() => {
        messageElement.textContent = '';
    }, 2000);
}

function handleKeyPress(event, action) {
    if (event.key === 'Enter') {
        switch (action) {
            case 'insert':
                insert();
                break;
            default:
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', displayStack);