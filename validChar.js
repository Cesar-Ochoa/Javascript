let a = '([{}])';
let b = '()[]{}';
let c = '{{(([[';
let d = ')]';

class Solution {
    validChar(text) {
        // Mapa que define los pares de caracteres de apertura y cierre
        let map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        // Pila para mantener un seguimiento de los caracteres de apertura
        let stack = [];

        // Recorre cada carácter en el texto
        for (let car of text) {
            // Si el carácter es de apertura, lo agrega a la pila
            if (map.hasOwnProperty(car)) {
                stack.push(car);
            } else {
                // Si el carácter es de cierre, verifica el último elemento en la pila
                let last = stack[stack.length - 1];
                if (map[last] === car) {
                    // Si el último elemento en la pila cierra con el carácter actual, lo elimina de la pila
                    stack.pop();
                } else {
                    // Si no coincide, agrega el carácter a la pila
                    stack.push(car);
                }
            }
        }

        // Si la pila está vacía al final, todos los caracteres están balanceados
        if (stack.length) {
            return false;
        }

        return true;
    }
}

console.log(new Solution().validChar(a)); // true
console.log(new Solution().validChar(b)); // true
console.log(new Solution().validChar(c)); // false
console.log(new Solution().validChar(d)); // false
