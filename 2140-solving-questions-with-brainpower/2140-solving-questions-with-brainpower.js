/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const n = questions.length;
    const dp = Array(n).fill(0);
    dp[n - 1] = questions[n - 1][0];
    for(let i = n - 2; i >= 0; --i) {
        const [p , b] = questions[i];
        const prevIdx = i + b + 1;
        dp[i] = Math.max(dp[i + 1] , p);
        if(prevIdx >= n) continue;
        dp[i] = Math.max(dp[i], dp[prevIdx] + p);
    }
    return dp[0];
};