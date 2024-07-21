let arr = ['a', 'b', 'c', 'c', 'c', 'd'];

class Solucion {
    // Método que verifica si una lista contiene duplicados
    contieneDuplicados(lista) {
        let mapa = {}; // Crear un objeto vacío para almacenar los elementos vistos
        for (const elemento of lista) { // Iterar sobre cada elemento de la lista
            if (!mapa[elemento]) { // Si el elemento no está en el mapa
                mapa[elemento] = true; // Añadir el elemento al mapa con valor true
            } else { // Si el elemento ya está en el mapa
                return true; // Retornar true, indicando que se encontró un duplicado
            }
        }
        return false; // Si no se encontraron duplicados, retornar false
    }
}

// Crear una instancia de la clase Solucion y llamar al método contieneDuplicados con el arreglo arr
console.log(new Solucion().contieneDuplicados(arr));
