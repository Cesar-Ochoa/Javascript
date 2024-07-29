function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Hacer un bucle hasta que no se realicen intercambios
    do {
        swapped = false;
        
        // Iterar a través del array
        for (let i = 0; i < n - 1; i++) {
            // Si el elemento actual es mayor que el siguiente, intercambiar
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        
        // Después de cada iteración, el siguiente mayor elemento se coloca en su posición correcta
        n--;
    } while (swapped);
    
    return arr;
}

let a = [5, 3, 8, 4, 2, 1, 10];
console.log(bubbleSort(a)); // Salida esperada: [1, 2, 3, 4, 5, 8, 10]
