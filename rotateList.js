let a = [1,2,3,4,5,6];
let b = 3;

class Solucion {
    /* rotateListJS(list, k) {
        k = k % list.length;
        for (let i = 0; i < k; i++) {
            let last  = list.pop();
            list.unshift(last);
        }
        return list;
    } */
   rotateList(list,k) {
    k = k % list.length;
    this.revert(list, 0, list.length - 1);
    this.revert(list, 0, k - 1);
    this.revert(list, k, list.length - 1);
    return list;
   }

   revert(list,i,j) {
    while (i < j) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        i++;
        j--;
    }
   }
}

console.log(new Solucion().rotateList(a,b));