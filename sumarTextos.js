let a = '145';
let b = '3455';

class Solucion {
    sumarTextos(txt1, txt2) {
        let result = '';
        let sobras = 0;

        for (let i = 0; i < Math.max(txt1.length, txt2.length); i++) {
            let num1 = parseInt(txt1[txt1.length - 1 - i] || 0);
            let num2 = parseInt(txt2[txt2.length - 1 - i] || 0);

            let suma = num1 + num2 + sobras;
            sobras = 0;
            
            if (suma > 9) {
                result = String(suma % 10) + result;
                sobras = 1;
            } else {
                result = String(suma) + result;
            }
        }

        if (sobras) {
            result = '1' + result;
        }
        return result;
    }
}

console.log(new Solucion().sumarTextos(a,b));