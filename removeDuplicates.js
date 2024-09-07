// Definir las listas de ejemplo
let lista = [1,2,3,5,5,5,6,4,7,7,7,9,2,5,3];
let lista2 = ['re', 're', 'fg', 're', 'xa'];

class Solucion {
	// Método para remover duplicados de un array
	removerDuplicados(array) {
		// Crear un objeto para llevar un registro de los elementos que ya hemos encontrado
		let map = {};
		// Crear un array para almacenar los elementos únicos
		let nuevaLista = [];

		// Iterar sobre cada elemento del array de entrada
		for (let item of array) {
			// Si el elemento no está en el mapa (es decir, no lo hemos encontrado antes)
			if (!map.hasOwnProperty(item)) {
				// Agregar el elemento a la nueva lista
				nuevaLista.push(item);
				// Marcar el elemento como "encontrado" en el mapa
				map[item] = true;
			}
		}

		// Retornar la lista con los elementos únicos (sin duplicados)
		return nuevaLista;
	}
}

// Imprimir el resultado de remover duplicados de ambas listas
console.log(new Solucion().removerDuplicados(lista));   // [1, 2, 3, 5, 6, 4, 7, 9]
console.log(new Solucion().removerDuplicados(lista2));  // ['re', 'fg', 'xa']
