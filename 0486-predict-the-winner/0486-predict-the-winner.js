/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    const len = nums.length;
    const totalScore = nums.reduce((acc, n) => acc + n);
    const dp = Array.from({ length: len }, () => Array(len).fill(-1));
    const backtrack = (i, j, curScore) => {
        if (i > j) return 0;
        if (dp[i][j] !== -1) return dp[i][j];
        let max = 0;
        max = Math.max(curScore - backtrack(i + 1, j, curScore - nums[i]), max);
        max = Math.max(curScore - backtrack(i, j - 1, curScore - nums[j]), max);
        dp[i][j] = max;
        return max;
    };
    const maxScore = backtrack(0, len - 1, totalScore);
    return maxScore >= totalScore / 2;
};
