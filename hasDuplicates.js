let arr = ['a', 'b', 'c', 'c', 'c', 'd'];

class Solucion {
	contieneDuplicados(lista) {
		let mapa = {};
		for (const elemento of lista) {
			if (!mapa[elemento]) {
				mapa[elemento] = true;
			} else {
				return true;
			}
		}
		return false;
	}
}

console.log(new Solucion().contieneDuplicados(arr));