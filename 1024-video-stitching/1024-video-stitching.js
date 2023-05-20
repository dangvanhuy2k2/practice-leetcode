/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
    clips.sort((c1, c2) => {
        if (c1[0] === c2[0]) return c2[1] - c1[1];
        return c1[0] - c2[0];
    }) 
    const dp = Array(time + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (const [start, end] of clips) {
        if (start > time || dp[start] === Number.MAX_VALUE) continue;
        for (let t = start; t <= Math.min(end, time); ++t) {
            dp[t] = Math.min(dp[start] + 1, dp[t]);
        }
    }
    return dp[time] === Number.MAX_VALUE ? -1 : dp[time];
};