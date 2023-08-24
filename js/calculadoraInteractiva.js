// Funciones de cálculo

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

// Calculadora

function calculator() {
    const operation = prompt("Seleccione una operación: +, -, *, / (o 'salir' para salir)").toLowerCase();

    if (operation === "salir") {
        console.log("Calculadora cerrada.");
        return;
    }

    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = sumar(num1, num2);
            break;
        case "-":
            result = restar(num1, num2);
            break;
        case "*":
            result = multiplicar(num1, num2);
            break;
        case "/":
            result = dividir(num1, num2);
            break;
        default:
            alert('Operación inválida');
            return;
    }

    alert(`Resultado: ${result}`);
}

// Impresora motivadora

function imprimirNumeros() {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }
    alert("¡Persistencia y esfuerzo son la clave del éxito! ¡Sigue adelante!");
}

// Elección del usuario

const userChoice = prompt('¿Desea usar la "Calculadora" o la "Impresora Motivadora" para imprimir números del 0 al 5 y recibir una frase motivadora? (Escribir "calculadora" o "impresora")').toLowerCase();

if (userChoice === 'calculadora') {
    calculator();
} else if (userChoice === 'impresora') {
    imprimirNumeros();
}