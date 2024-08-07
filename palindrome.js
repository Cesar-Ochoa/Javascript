let a = 'la ruta natural';
let b = 'no es un palindromo';

class Solucion {
    // Método para verificar si un texto es un palíndromo válido (ignorando caracteres no alfanuméricos y mayúsculas/minúsculas)
    palindromoValido(texto) {
        let i = 0;                // Índice inicial
        let j = texto.length - 1; // Índice final
        let letrai;               // Carácter en la posición i
        let letraj;               // Carácter en la posición j

        // Bucle para comparar los caracteres desde ambos extremos hacia el centro
        while (i < j) {
            letrai = texto[i].toLowerCase(); // Convertir el carácter en la posición i a minúscula
            letraj = texto[j].toLowerCase(); // Convertir el carácter en la posición j a minúscula

            // Si el carácter en la posición i no es alfanumérico, avanzar al siguiente carácter
            if (!this.esLetraONumero(letrai)) i++;
            // Si el carácter en la posición j no es alfanumérico, retroceder al carácter anterior
            else if (!this.esLetraONumero(letraj)) j--;
            // Si los caracteres son iguales, avanzar ambos índices
            else if (letrai === letraj) { i++; j--; }
            // Si los caracteres no son iguales, el texto no es un palíndromo
            else return false;
        }

        // Si se han comparado todos los caracteres correctamente, el texto es un palíndromo
        return true;
    }

    // Método para verificar si un carácter es una letra o un número
    esLetraONumero(letra) {
        return (letra >= 'a' && letra <= 'z') || (letra >= '0' && letra <= '9');
    }
}

// Ejecutar el método palindromoValido en la cadena 'a' y mostrar el resultado en la consola
console.log(new Solucion().palindromoValido(a)); // Devuelve true
console.log(new Solucion().palindromoValido(b)); // Devuelve false
