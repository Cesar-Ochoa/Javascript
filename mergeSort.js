let a = [2, 5, 4, 2, 3, 8, 1, 0, 9];

class Solution {
    // Método para realizar el ordenamiento por mezcla (merge sort)
    mergeSort(list) {
        // Caso base: Si la lista tiene un solo elemento o está vacía, ya está ordenada
        if (list.length <= 1) return list;

        // Encuentra el punto medio de la lista
        let middle = Math.ceil(list.length / 2);

        // Divide la lista en dos sublistas: izquierda y derecha
        let left = list.splice(0, middle);
        let right = list.splice(-middle);

        // Ordena recursivamente cada sublista
        this.mergeSort(left);
        this.mergeSort(right);

        // Índices para recorrer las sublistas izquierda, derecha y la lista original
        let [i, j, k] = [0, 0, 0];

        // Mezcla las dos sublistas en la lista original en orden ascendente
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                list[k] = left[i];
                i++;
            } else {
                list[k] = right[j];
                j++;
            }
            k++;
        }

        // Si quedan elementos en la sublista izquierda, agrégalos a la lista original
        while (i < left.length) {
            list[k] = left[i];
            i++;
            k++;
        }

        // Si quedan elementos en la sublista derecha, agrégalos a la lista original
        while (j < right.length) {
            list[k] = right[j];
            j++;
            k++;
        }

        // Devuelve la lista ordenada
        return list;
    }
}

// Ejecuta el método mergeSort en la lista 'a' y muestra el resultado en la consola
console.log(new Solution().mergeSort(a));
