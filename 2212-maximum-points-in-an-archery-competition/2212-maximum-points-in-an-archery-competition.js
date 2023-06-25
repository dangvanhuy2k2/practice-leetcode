/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function (numArrows, aliceArrows) {
    let maxScore = 0;
    let ans = [];
    const bobArrows = Array(aliceArrows.length).fill(0);

    const backtrack = (pos, score, remainArrows) => {
        if (remainArrows < 0) return;
        if (pos >= aliceArrows.length) {
            if (score > maxScore) {
                maxScore = score;
                ans = [...bobArrows];
                ans[0] += remainArrows;
            }
            return;
        }
        // win
        bobArrows[pos] = aliceArrows[pos] + 1;
        backtrack(pos + 1, score + pos, remainArrows - bobArrows[pos]);
        bobArrows[pos] = 0;
        // ko win
        backtrack(pos + 1, score, remainArrows);
    };

    backtrack(0, 0, numArrows);

    return ans;
};
