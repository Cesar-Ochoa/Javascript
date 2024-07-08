const a = [0,1,2,2,3];
const b = [];
const c = [0,0,1,2,3,4,4,4,4,4,5];

class Solucion {
    removerDuplicados(lista) {
        if (lista.length === 0) return 0;
        let i = 0;
        for (let j = 1; j < lista.length; j++ ) {
            if (lista[j] !== lista[i]) {
                i++;
                lista[i] = lista[j];
            }
        }
        return i + 1;
    }
}


console.log(new Solucion().removerDuplicados(a));
console.log(a);