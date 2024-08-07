let a = 'hello world';

class Solution {
    frequentSort(text) {
        let freq = {};

        for (let char of text) {
            freq[char] = (freq[char] || 0) + 1;
        }

        return this.dedupe(text.split('').sort((a,b) => freq[b] - freq[a])).join('');
    }

    dedupe(array) {
        let seen = {};
        let deduped = [];

        for (let char of array) {
            if (!seen.hasOwnProperty(char)) {
                deduped.push(char);
                seen[char] = true;
            }
        }

        return deduped;
    }
}

console.log(new Solution().frequentSort(a));