let a = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ];

  class Solution {
    validSudoku(matrix) {
        if (!this.validRows(matrix)) return false;
        if (!this.validColumns(matrix)) return false;
        if (!this.validBlocks(matrix)) return false;
        return true;
    }

    validRows(matrix) {
        for (let y = 0; y < 9; y++) {
            const row = matrix[y];
            const map = {};
            for (let x = 0; x < 9; x++) {
                const cell = row[x];
                if (cell === ".") continue;
                if (!map[cell]) {
                    map[cell] = true;
                } else {
                    return false;
                }
            }    
        }
        return true;
    }

    validColumns(matrix) {
        for (let y = 0; y < 9; y++) {
            const map = {};
            for (let x = 0; x < 9; x++) {
                const column = matrix[x];
                const cell = column[y];
                if (cell === ".") continue;
                if (!map[cell]) {
                    map[cell] = true;
                } else {
                    return false;
                }
            }    
        }
        return true;
    }

    validBlocks(matrix) {
        const map = {};
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                const block = `${Math.floor(y/3)}-${Math.floor(x/3)}`;
                const cell = matrix[y][x];
                if (!map[block]) {
                    map[block] = {};
                }
                if (cell === ".") continue;
                if (!map[block][cell]) {
                    map[block][cell] = true;
                } else {
                    return false;
                }
            }    
        }
        return true;
    }

    sudokuOptimized(matrix) {
        const map = {};
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                const block = `${Math.floor(y/3)}-${Math.floor(x/3)}`;
                const cell = matrix[y][x];
                const row = matrix[y];
                const column = matrix[x];

                if (cell === ".") continue;
                if (map[`${cell} on row ${row}`]
                    || map[`${cell} on column ${column}`]
                    || map[`${block} on column ${block}`]
                ) return false;
                map[`${cell} on row ${row}`] = true;
                map[`${cell} on column ${column}`] = true;
                map[`${block} on column ${block}`] = true;
            }    
        }
        return true;
    }
  }

  console.log(new Solution().validSudoku(a));