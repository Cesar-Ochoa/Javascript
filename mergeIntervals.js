let a = [[0,3],[2,5],[1,2],[8,9],[7,18],[30,31]];
let b = [];
let c = [[4,5],[7,8],[10,100]];

class Solucion {
    mergeIntervals(lista) {
        lista.sort((a,b) => a[0] - b[0]);

        let fusionado = [];
        for (let rango of lista) {
            const ultimo = fusionado.length - 1;
            if (!fusionado.length || fusionado[ultimo][1] < rango[0]) {
                fusionado.push(rango)
            } else {
                fusionado[ultimo][1] = Math.max(fusionado[ultimo][1], rango[1]);
            }
        }
        return fusionado;
    }
}

console.log(new Solucion().mergeIntervals(a));
console.log(new Solucion().mergeIntervals(b));
console.log(new Solucion().mergeIntervals(c));