/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    const n = board.length;
    const m = board[0].length;

    const createKey = (state) => state.join("");

    const firstState = board.flat();
    const visit = new Set();
    visit.add(firstState);
    const queue = [firstState];

    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;

    const findOriginIdx = (i) => [Math.floor(i / m), i % m];
    const findCurIdx = (i, j) => i * m + j;

    const updateQueue = (state) => {
        for (let i = 0; i < state.length; ++i) {
            if (state[i] !== 0) continue;
            const [r, c] = findOriginIdx(i);
            const dx = [0, 0, 1, -1];
            const dy = [1, -1, 0, 0];

            for (let k = 0; k < dx.length; ++k) {
                const newState = [...state];
                const newR = r + dx[k],
                    newC = c + dy[k];

                if (!isValid(newR, newC)) continue;
                const newIdx = findCurIdx(newR, newC);
                const tmp = newState[newIdx];
                newState[newIdx] = 0;
                newState[findCurIdx(r, c)] = tmp;
                const key = createKey(newState);
                if (visit.has(key)) continue;
                visit.add(key);
                queue.push(newState);
            }
            break;
        }
    };
    const targetState = "123450";
    let step = 0;
    while (queue.length !== 0) {
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            const state = queue.shift();
            if (createKey(state) === targetState) return step;
            updateQueue(state);
        }
        ++step;
    }
    return -1;
};
