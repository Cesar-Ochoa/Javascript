let a = 1;
let b = 5;
let c = 30;
let d = 100;
let e = 999999;

class Solution {
    perfectNumber(num) {

        if (num === 1) return false;
        //let divisors = {};
        let sum = 1;

        for (let i = 2; i < (num ** 0.5); i++) {
            if (num % i === 0) {
                /* if (divisors.hasOwnProperty(i)) {
                    break;
                } */
                let oposite = num/i;
                /* divisors[i] = true;
                divisors[oposite] = true; */
                sum += i + oposite;
            }
        }

        return sum === num;
    }
}

console.log(new Solution().perfectNumber(a));
console.log(new Solution().perfectNumber(b));
console.log(new Solution().perfectNumber(c));
console.log(new Solution().perfectNumber(d));
console.log(new Solution().perfectNumber(e));
console.log(new Solution().perfectNumber(28));