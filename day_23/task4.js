// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nen chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle. Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    let res = [];
    let board = Array.from({length: n}, () => Array(n).fill("."));

    function isValid(row,col) {
        for(let i = 0; i < row; i++) {
            if(board[i][col] === "Q") return false;
            if(col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if(col + (row - i) >= 0 && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }

    function placeQueens(row) {
        if(row === n) {
            res.push(board.map(row => row.join('')))
        }
        for (let col = 0; col < n; col++) {
            if(isValid(row,col)){
                board[row][col] ='Q';
                placeQueens(row + 1);
                board[row][col] = '.';
            } 
        }
    }

    placeQueens(0)
    return res;
}

// Test cases
console.log(solveNQueens(4)); // Expected output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Expected output: [["Q"]]