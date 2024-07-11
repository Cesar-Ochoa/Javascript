let a = [3,5,2,1,9,10,3];
let b = [];
let c = [0,10,5,15,30,35,10];

class Solucion {
    maxIncome(precios) {
        let income = 0; 

        for (let i = 1; i < precios.length; i++) {
            if (precios[i] > precios[i - 1]) {
                income += precios[i] - precios[i-1];
            }
        }
        return income;
    }
}

console.log(new Solucion().maxIncome(a));