const a = [1, 3, 8];
const b = [9, 9];

class Solution {
    // Método que incrementa en 1 el número representado por una lista de dígitos
    addOne(list) {
        // Itera sobre la lista desde el último elemento hacia el primero
        for (let i = list.length - 1; i >= 0; i--) {
            // Si el dígito actual es menor que 9, se puede incrementar sin generar acarreo
            if (list[i] < 9) {
                list[i]++;
                // Retorna la lista actualizada inmediatamente después de incrementar
                return list;
            }
            // Si el dígito es 9, se convierte en 0 y se pasa el acarreo al siguiente dígito a la izquierda
            list[i] = 0;
        }
        // Si se ha iterado sobre todos los dígitos y todos eran 9, se necesita agregar un nuevo dígito 1 al inicio
        return [1, ...list];
    }
}

console.log(new Solution().addOne(a)); // Imprime [1, 3, 9]
console.log(new Solution().addOne(b)); // Imprime [1, 0, 0]
