let a = [2,5,4,2,3,8,1,0,9];

class Solution {
    mergeSort(list) {
        if(list.length <= 1) return list;

        let middle = Math.ceil(list.length/2);
        let left = list.splice(0, middle);
        let right = list.splice(-middle);

        this.mergeSort(left);
        this.mergeSort(right);
        let [i,j,k] = [0,0,0];

        while (i < left.length && j < right.length) {
            if (left[i] < right) {
                list[k] = left[i];
                i++;
            } else {
                list[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < left.length) {
            list[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            list[k] = right[j];
            j++;
            k++;
        }

        return list;
    }
}