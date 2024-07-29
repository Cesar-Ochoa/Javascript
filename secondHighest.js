let a = [5, 3, 5, 2, 8, 6, 4, 0, 1, 10, 6];

class Solucion {
    // Método para encontrar la segunda ganancia máxima
    secondMaxIncome(lista) {
        let min = Infinity;  // Variable para rastrear el valor mínimo encontrado
        let gMax = 0;        // Variable para rastrear la ganancia máxima
        let secondGMax = 0;  // Variable para rastrear la segunda ganancia máxima

        // Iterar sobre todos los valores en la lista
        for (let i = 0; i < lista.length; i++) {
            const valor = lista[i];
            
            // Si el valor actual es menor que el mínimo, actualizar el mínimo
            if (valor < min) {
                min = valor;
            } 
            // Si la ganancia actual (valor - min) es mayor que la ganancia máxima, 
            // actualizar secondGMax antes de actualizar gMax
            else if (valor - min > gMax) {
                secondGMax = gMax; // Actualizar el segundo máximo
                gMax = valor - min; // Actualizar el máximo global
            } 
            // Si la ganancia actual es mayor que secondGMax pero menor que gMax,
            // actualizar secondGMax
            else if (valor - min > secondGMax && valor - min < gMax) {
                secondGMax = valor - min;
            }
        }
        // Retornar la segunda ganancia máxima
        return secondGMax;
    }
}

console.log(new Solucion().secondMaxIncome(a)); // Salida esperada: El segundo valor más alto

/* let a = [5, 4, 3, 2, 1, 0, 6];

class Solucion {
    // Método para encontrar la segunda ganancia máxima
    secondMaxIncome(lista) {
        let gMax = 0;         // Variable para rastrear la ganancia máxima
        let secondGMax = 0;   // Variable para rastrear la segunda ganancia máxima

        // Iterar sobre cada par de valores en la lista
        for (let i = 0; i < lista.length - 1; i++) {
            const valor1 = lista[i];  // Primer valor del par
            for (let j = i + 1; j < lista.length; j++) {
                const valor2 = lista[j];  // Segundo valor del par

                // Calcular la ganancia actual
                const ganancia = valor2 - valor1;

                // Si la ganancia actual es mayor que la ganancia máxima, actualizar
                // secondGMax antes de actualizar gMax
                if (ganancia > gMax) {
                    secondGMax = gMax;  // Actualizar el segundo máximo
                    gMax = ganancia;    // Actualizar el máximo global
                } 
                // Si la ganancia actual es mayor que secondGMax pero menor que gMax,
                // actualizar secondGMax
                else if (ganancia > secondGMax && ganancia < gMax) {
                    secondGMax = ganancia;
                }
            }
        }
        // Retornar la segunda ganancia máxima
        return secondGMax;
    }
}

console.log(new Solucion().secondMaxIncome(a)); // Salida esperada: El segundo valor más alto
 */