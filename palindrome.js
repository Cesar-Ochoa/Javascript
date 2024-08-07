let a = 'la ruta natural';
let b = 'no es un palindromo';

class Solucion {
    palindromoValido(texto) {
        let i = 0;
        let j = 0;
        let letrai;
        let letraj;

        while (i < j) {
            letrai = texto[i].toLowerCase();
            letraj = texto[j].toLowerCase();
            if (!this.esLetraONumero(letrai)) i++;
            else if (!this.esLetraONumero(letraj)) j--;
            else if (letrai === letraj) {i++; j--;}
            else return false;
        }

        return true;
    }

    esLetraONumero(letra) {
        return (letra >= 'a' && letra <= 'z') || (letra >= '0' && letra <= '9');
    }
}

console.log(new Solucion().palindromoValido(a))