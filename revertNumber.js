let a = -123;
let b = 485729;
let c = 9999999991;

class Solucion {
    // Método para revertir un número utilizando manipulación de cadenas
    revertNumber(x) {
        let text = String(x);  // Convierte el número en una cadena
        let rev = '';  // Cadena donde se guardará el número invertido

        // Recorre la cadena de derecha a izquierda
        for (let i = text.length - 1; i >= 0; i--) {
            const num = text[i];  // Obtiene cada carácter de la cadena
            if (num === '-') {  // Si es un signo negativo
                rev = '-' + rev;  // Coloca el signo negativo al principio
                continue;  // Continúa con la siguiente iteración
            }
            rev = rev + num;  // Añade el carácter actual a la cadena invertida
        }
        rev = Number(rev);  // Convierte la cadena invertida de nuevo a número
        let rango = Math.pow(2,31);  // Calcula el rango basado en 2^31

        // Si el número invertido está fuera del rango de un entero de 32 bits, regresa 0
        return rev > rango - 1 || rev < -rango ? 0 : rev;
    }

    // Método para revertir un número utilizando operaciones matemáticas
    revertNumber2(x) {
        let rev = 0;  // Variable donde se guardará el número invertido
        let rango = Math.pow(2,31);  // Calcula el rango basado en 2^31
        while (x != 0) {  // Mientras el número no sea 0
            let pop = x % 10;  // Obtiene el último dígito del número
            x = parseInt(x / 10);  // Remueve el último dígito del número
            rev = rev * 10 + pop;  // Añade el dígito al número invertido
            if (rev > rango - 1 || rev < -rango) return 0;  // Verifica si el número invertido está dentro del rango
        }
        return rev;  // Regresa el número invertido
    }
}

console.log(new Solucion().revertNumber2(c));  // Llama al método revertNumber2 con el número c
