const a = [0,2,5,0,11];
const b = [3,0,0,5,6];

class Solution {
    moveZeros(list) {
        let j = 0; // Inicializa el índice para los elementos no cero
        for (let i = 0; i < list.length; i++) {
            if (list[i] != 0) { // Si el elemento actual no es cero
                // Intercambia el elemento actual con el elemento en la posición j
                let temp = list[j];
                list[j] = list[i];
                list[i] = temp;
                j++; // Incrementa el índice para los elementos no cero
            }
        }
        return list; // Retorna la lista con los ceros movidos al final
    }
}

console.log(new Solution().moveZeros(a)); // [2, 5, 11, 0, 0]
