const a1 = [0,2,2,0];
const a2 = [2,3,2];
const b1 = [5,3,0];
const b2 = [1,3,5];

class Solution {
    interLists(list1, list2) {
        // Crear un objeto para mapear la cantidad de ocurrencias de cada número en list1
        let map = {};
        // Crear una lista para almacenar el resultado
        let result = [];

        // Iterar sobre cada número en list1
        for (let num of list1) {
            // Si el número no está en el mapa, agregarlo con valor 1
            if (!map.hasOwnProperty(num)) {
                map[num] = 1;
            } else {
                // Si el número ya está en el mapa, incrementar el contador
                map[num]++;
            }
        }

        // Iterar sobre cada número en list2
        for (let num of list2) {
            // Si el número está en el mapa y su valor es mayor que 0
            if (map[num]) {
                // Agregar el número al resultado
                result.push(num);
                // Decrementar el contador en el mapa
                map[num]--;
            }
        }
        // Retornar la lista resultante
        return result;
    }
}

// Imprimir el resultado de la intersección de las listas a1 y a2
console.log(new Solution().interLists(a1, a2));
