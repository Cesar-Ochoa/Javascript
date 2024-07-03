const a = 'text'.split('');
const b = 'listas'.split('');

class Solucion {
    revertirTexto(lista) {
        let revertida = [];
        for (let i = lista.length - 1; i >= 0; i--) {
            revertida.push(lista[i]);
        }
        return revertida;
    }
}

console.log(new Solucion().revertirTexto(a));