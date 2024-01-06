/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    const a = [];
    for (let i = 0; i < startTime.length; ++i) {
        a.push([startTime[i], endTime[i], profit[i]]);
    }
    a.sort((t1, t2) => {
        if (t1[1] != t2[1]) return t1[1] - t2[1];
        return t1[0] - t2[0];
    });
    const dp = Array(a.length).fill(0);
    let max = 0;
    const bns = (target, r) => {
        let l = 0,
            maxP = 0;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const [_, end] = a[m];
            if (end <= target) {
                maxP = Math.max(maxP, dp[m]);
                l = m + 1;
            } else r = m - 1;
        }
        return maxP;
    };
    for (let i = 0; i < a.length; ++i) {
        const [start, _, p] = a[i];
        dp[i] = bns(start, i - 1) + p;
        max = Math.max(max, dp[i]);
        dp[i] = max;
    }
    return max;
};
