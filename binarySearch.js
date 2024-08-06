const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

class Solution {
    binarySearch(list, value, minor = 0, biggest = list.length - 1) {
        if (biggest < minor) return -1;
        let medium = Math.floor((minor + biggest) / 2);
        if (list[medium] === value) return medium;
        if (list[medium] > value) return this.binarySearch(list, value, minor, medium - 1);
        return this.binarySearch(list, value, medium + 1, biggest);
    }
}

console.log(new Solution().binarySearch(a, 'a')); // Debe devolver 0
console.log(new Solution().binarySearch(a, 'd')); // Debe devolver 3
console.log(new Solution().binarySearch(a, 'k')); // Debe devolver 10
console.log(new Solution().binarySearch(a, 'z')); // Debe devolver -1 (no encontrado)
