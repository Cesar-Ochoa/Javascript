let a = 'hello world';

class Solution {
    // Método para ordenar los caracteres de un texto según su frecuencia de aparición
    frequentSort(text) {
        // Objeto para almacenar la frecuencia de cada carácter en el texto
        let freq = {};

        // Contar la frecuencia de cada carácter en el texto
        for (let char of text) {
            freq[char] = (freq[char] || 0) + 1;
        }

        // Dividir el texto en un array de caracteres, ordenar según frecuencia y eliminar duplicados
        return this.dedupe(text.split('').sort((a, b) => freq[b] - freq[a])).join('');
    }

    // Método para eliminar duplicados en un array manteniendo el orden
    dedupe(array) {
        let seen = {};      // Objeto para rastrear caracteres ya vistos
        let deduped = [];   // Array para almacenar los caracteres únicos

        // Iterar sobre cada carácter en el array
        for (let char of array) {
            // Si el carácter no ha sido visto antes, añadirlo al array deduplicado
            if (!seen.hasOwnProperty(char)) {
                deduped.push(char);
                seen[char] = true;  // Marcar el carácter como visto
            }
        }

        // Devolver el array deduplicado
        return deduped;
    }
}

// Ejecutar el método frequentSort en la cadena 'a' y mostrar el resultado en la consola
console.log(new Solution().frequentSort(a));
