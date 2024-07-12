const a = [1,3,8,11,6,21];
const b = 19;

class Solucion {
    sumaDeDos(lista, x) {
        for (let i = 0; i < lista.length; i++) {
            let v = lista[i]; //en la primera iteracion v == 1, despues a 3, luego a 8 , etc.
            for (let j = 0; j < lista.length; j++ ) { // tambien inicia desde 0, en la segunda iteracion, j sigue valiendo 0
                let w = lista[j]; //igual que en v
                if (j <= i){ //aqui evalua si en la primera iteracion j es menor o igual que i, si es menor o igual, 
                    console.log('i:',i , ' v: ', v);
                    console.log('j', j, ' w: ', w );
                    continue;
                }
                if (v + w === x) {
                    console.log('i:',i , ' j: ', j);
                    console.log('v: ',v, ' w: ',w);
                    return [i,j];
                }
            }
        }
        return [];
    } 
    
}

console.log(new Solucion().sumaDeDos(a,b));