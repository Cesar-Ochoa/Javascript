let a = 'elefante';
let b = 'llanta';

class Solucion {
    // Método para encontrar el índice del primer carácter único en un texto
    primerCaracterUnico(texto) {
        let map = {}; // Objeto para almacenar la frecuencia de cada carácter

        // Recorrer cada carácter del texto
        for (let letra of texto) {
            // Incrementar el contador de frecuencia del carácter en el mapa
            map[letra] = map[letra] + 1 || 1;
        }

        // Recorrer el texto de nuevo para encontrar el primer carácter único
        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i];
            // Si la frecuencia del carácter es 1, es el primer carácter único
            if (map[letra] === 1) {
                return i; // Devolver el índice del primer carácter único
            }
        }

        // Si no se encuentra un carácter único, devolver -1
        return -1;
    }
}

// Ejecutar el método primerCaracterUnico en las cadenas 'a' y 'b' y mostrar los resultados en la consola
console.log(new Solucion().primerCaracterUnico(a)); // Devuelve 1 (índice del carácter 'l')
console.log(new Solucion().primerCaracterUnico(b)); // Devuelve 1 (índice del carácter 'a')
