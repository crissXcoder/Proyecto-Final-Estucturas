let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayArray() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = '';
    array.forEach((element, index) => {
        const arrayElement = document.createElement('div');
        arrayElement.className = 'array-element';
        arrayElement.textContent = element;
        arrayDisplay.appendChild(arrayElement);
    });
}

function access() {
    const index = document.getElementById('accessIndex').value;
    const result = document.getElementById('accessResult');
    result.classList.remove('error');
    if (index < array.length && index >= 0) {
        result.textContent = `Valor en índice ${index}: ${array[index]}`;
    } else {
        result.textContent = 'Índice fuera de rango';
        result.classList.add('error');
    }
}

function search() {
    const value = document.getElementById('searchValue').value;
    const result = document.getElementById('searchResult');
    result.classList.remove('error');
    const index = array.indexOf(Number(value));
    if (index !== -1) {
        result.textContent = `Valor ${value} encontrado en índice ${index}`;
    } else {
        result.textContent = 'Valor no encontrado';
        result.classList.add('error');
    }
}

function insert() {
    const value = document.getElementById('insertValue').value;
    if (value !== '') {
        array.push(Number(value));
        displayArray();
        document.getElementById('insertValue').value = ''; // Clear input after insertion
    }
}

function del() {
    const index = document.getElementById('deleteIndex').value;
    if (index < array.length && index >= 0) {
        array.splice(index, 1);
        displayArray();
    } else {
        alert('Índice fuera de rango');
    }
}

function sortAscending() {
    array.sort((a, b) => a - b);
    displayArray();
}

function sortDescending() {
    array.sort((a, b) => b - a);
    displayArray();
}

function handleKeyPress(event, action) {
    if (event.key === 'Enter') {
        switch(action) {
            case 'access':
                access();
                break;
            case 'search':
                search();
                break;
            case 'insert':
                insert();
                break;
            case 'del':
                del();
                break;
            default:
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', displayArray);
