/* let a = [5,4,3,2,1,0,6];

class Solucion {
    maxIncome(lista) {
        let gMax = 0;

        for (let i = 0; i < lista.length - 1; i++) {
            const valor1 = lista[i];
            for (let j = i + 1; j < lista.length; j++) {
                const valor2 = lista[j];
                if (valor2 - valor1 > gMax) {
                    gMax = valor2 - valor1;
                }
            }
        }
        return gMax;
    }
} */

    let a = [5,3,5,2,8,6,4,0,1,10,6];

    class Solucion {
        maxIncome(lista) {
            let min = Infinity;
            let gMax = 0;

            for (let i = 0; i < lista.length; i++) {
                const valor = lista[i];
                if (valor < min) {
                    min = valor;
                } else if (valor - min > gMax) {
                    gMax = valor - min;
                }
            }
            return gMax;
        }
    }

console.log(new Solucion().maxIncome(a));