let a = [1,2,2,2,3,4,5,,5,6,3,5,7];
let b = 3;

class Solution {
    elementFrequent(list, k) {
        let freq = {};
        //get frequency
        for (const elem of list) {
            freq[elem] = (freq[elem] || 1) + 1;
        }

        //frequency -> ordered list
        //list k
       return  Object.keys(freq).sort((a,b) => freq[b] - freq[a]).slice(0, k);
    }
}

console.log(new Solution().elementFrequent(a,b));