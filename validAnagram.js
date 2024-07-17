let a = 'amor';
let b = 'roma';
let c = 'mora';
let d = 'casa';

class Solution {
    validAnagram(text1, text2) {
        if (text1.length !== text2.length) return false;

        let map = {};
        for (let letter of text1) {
            map[letter] = map[letter] + 1 || 1;
        }

        for (let letter of text2) {
            if (!map[letter]) return false;
            map[letter]--;
        }
        return true;
    }
}

console.log(new Solution().validAnagram(a, b));