//1. Implementation Using a For Loop

let fibonacci = () => {
    // Inicializa las dos primeras variables de la secuencia de Fibonacci
    let prev1 = 0;
    let prev2 = 1;

    // Imprime los dos primeros números de la secuencia
    console.log(prev1);  // 0
    console.log(prev2);  // 1

    // Itera para generar los siguientes 18 números de la secuencia
    for (let fibo = 1; fibo <= 18; fibo++) {
        // Calcula el siguiente número de Fibonacci sumando los dos anteriores
        let newFibo = prev1 + prev2;
        console.log(newFibo);  // Imprime el siguiente número de Fibonacci
        // Actualiza las variables para la siguiente iteración
        prev1 = prev2;
        prev2 = newFibo;
    }
}
fibonacci();

//2. Implementation Using Recursion

let count = 2;  // Inicializa un contador para limitar la recursión a 20 números

let fivonacci = (prev1, prev2) => {
    if (count <= 19) {  // Condición base para detener la recursión
        // Calcula el siguiente número de Fibonacci
        let newFibo = prev1 + prev2;
        console.log(newFibo);  // Imprime el siguiente número
        // Actualiza las variables para la siguiente llamada recursiva
        prev2 = prev1;
        prev1 = newFibo;
        count++;  // Incrementa el contador
        fivonacci(prev1, prev2);  // Llama a la función de manera recursiva
    } else {
        return;  // Si el contador llega a 19, termina la recursión
    }
}
fivonacci(1, 0);  // Llama a la función recursiva, iniciando con 1 y 0


//Classes Implementation Using a For Loop

class Fibonacci {
    fibonacci() {
        // Inicializa las dos primeras variables de la secuencia de Fibonacci
        let prev1 = 0;
        let prev2 = 1;

        // Imprime los dos primeros números de la secuencia
        console.log(prev1);  // 0
        console.log(prev2);  // 1

        // Itera para generar los siguientes 18 números de la secuencia
        for (let fibo = 1; fibo <= 18; fibo++) {
            // Calcula el siguiente número de Fibonacci sumando los dos anteriores
            let newFibo = prev1 + prev2;
            console.log(newFibo);  // Imprime el siguiente número de Fibonacci
            // Actualiza las variables para la siguiente iteración
            prev1 = prev2;
            prev2 = newFibo;
        }
    }
}

console.log(new Fibonacci().fibonacci());  // Crea una instancia de Fibonacci y llama al método

//Classes Implementation Using Recursion

class Fibonacci {
    constructor() {
        this.count = 2;  // Inicializa el contador como propiedad de la clase
    }

    // Método para generar la secuencia de Fibonacci recursivamente
    fibonacci(prev1, prev2) {
        if (this.count <= 19) {  // Condición base para detener la recursión
            // Calcula el siguiente número de Fibonacci
            let newFibo = prev1 + prev2;
            console.log(newFibo);  // Imprime el siguiente número
            // Actualiza las variables para la siguiente llamada recursiva
            prev2 = prev1;
            prev1 = newFibo;
            this.count++;  // Incrementa el contador
            this.fibonacci(prev1, prev2);  // Llama al método recursivamente
        } else {
            return;  // Termina la recursión cuando se alcanzan 19 números
        }
    }
}

let fiboInstance = new Fibonacci();  // Crea una instancia de la clase Fibonacci
fiboInstance.fibonacci(1, 0);  // Llama al método recursivo de la instancia
