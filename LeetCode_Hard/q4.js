// N-Queens : https://leetcode.com/problems/n-queens/

// Write a function that places N queens on an NxN chessboard such that no two queens attack each other. Log all possible solutions for N = 4.

const solveNQueens = (n) => {
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const res = [];

    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    const backtrack = (row) => {
        if (row === n) {
            res.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return res;
}

console.log(solveNQueens(4));
