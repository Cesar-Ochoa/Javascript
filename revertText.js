const a = 'text'.split('');
const b = 'listas'.split('');

class Solucion {
    /* revertirTexto(lista) {
        let revertida = [];
        for (let i = lista.length - 1; i >= 0; i--) {
            revertida.push(lista[i]);
        }
        return revertida;
    } */

    revertirTexto(lista) {
        for (let i = 0; i < lista.length / 2; i++) {
            let ultimoIndice = lista.length - 1 - i;
            let letra = lista[ultimoIndice];

            lista[ultimoIndice] = lista[i];
            lista[i] = letra;
        }
        return lista;
    }
}

console.log(new Solucion().revertirTexto(a));