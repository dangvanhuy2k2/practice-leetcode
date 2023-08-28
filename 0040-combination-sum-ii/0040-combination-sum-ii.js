/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const ans = [];
    const a = [];
    candidates.sort((n1, n2) => n1 - n2);
    console.log(candidates);
    const backtrack = (pos, total) => {
        if (total === target) {
            ans.push([...a]);
            return;
        }
        if (total > target || pos >= candidates.length) return;
        a.push(candidates[pos]);
        backtrack(pos + 1, total + candidates[pos]);
        a.pop();
        let idx = pos + 1;
        while (
            idx < candidates.length &&
            candidates[idx] === candidates[idx - 1]
        )
            ++idx;
        backtrack(idx, total);
    };

    backtrack(0, 0);
    return ans;
};
