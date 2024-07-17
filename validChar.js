let a = '([{}])';
let b = '()[]{}';
let c = '{{(([[)';
let d = ')]';

class Solution {
    validChar(text) {
        let map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        let stack = [];

        for (let car of text) {
            if (map.hasOwnProperty(car)) {
                stack.push(car);
            } else {
                let last = stack[stack.length - 1];
                if (map[last] === car) {
                    stack.pop();
                } else {
                    stack.push(car);
                }
            }
        }

        if (stack.length) {
            return false;
        }

        return true;
    }
}

console.log(new Solution().validChar(a));