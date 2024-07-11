const a = [1,2,3,2,3];
const b = [2];
const c = [4,6,2,2,4,1];

class Solucion {
    singleNumber(lista) {
        let resultado = 0;
        for (let num of lista) {
            //resultado = resultado ^ num;
            resultado ^= num;
        }
        return resultado;
    }
}

console.log(new Solucion().singleNumber(a));