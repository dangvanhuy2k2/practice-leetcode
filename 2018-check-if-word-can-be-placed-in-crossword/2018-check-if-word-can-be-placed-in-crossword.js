/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
    const n = board.length,
        m = board[0].length;
    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;
    const place = (i, j, dx, dy) => {
        if (isValid(i - dx, j - dy) && board[i - dx][j - dy] !== "#")
            return false;
        let idx = 0;
        while (isValid(i, j) && idx < word.length) {
            const c = board[i][j];
            if (c === " " || c === word[idx]) {
                ++idx;
                i += dx;
                j += dy;
                continue;
            }
            return false;
        }
        return idx === word.length && (!isValid(i, j) || board[i][j] === "#");
    };

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            let isValid = false;
            if (n - i >= word.length) isValid = isValid || place(i, j, 1, 0);
            if (i + 1 >= word.length) isValid = isValid || place(i, j, -1, 0);
            if (m - j >= word.length) isValid = isValid || place(i, j, 0, 1);
            if (j + 1 >= word.length) isValid = isValid || place(i, j, 0, -1);
            if (isValid) return true;
        }
    }
    return false;
};
