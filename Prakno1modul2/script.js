let result = document.getElementById("result");

function clearScreen() {
    result.value = "";
}

function insert(value) {
    if (value === '^') {
        result.value += '**'; // '**' digunakan untuk pangkat di JavaScript
    } else {
        result.value += value;
    }
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = "Error";
    }
}
