let lista = [1,2,3,5,5,5,6,4,7,7,7,9,2,5,3];
let lista2 = ['re', 're', 'fg', 're', 'xa'];

class Solucion {
	removerDuplicados(array) {
		let map = {};
		let nuevaLista = [];
		for (let item of array) {
			if (!map.hasOwnProperty[item]) {
				nuevaLista.push(item);
				map[item] = true;
			}
		}
		return nuevaLista;
	}
}

console.log(new Solucion().removerDuplicados(lista));
console.log(new Solucion().removerDuplicados(lista2));