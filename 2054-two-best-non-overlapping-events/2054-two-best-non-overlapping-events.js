/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
    const n = events.length;
    events.sort((e1, e2) => {
        if (e1[0] !== e2[0]) return e1[0] - e2[0];
        return e1[1] - e2[1];
    });

    const bns = (endTime) => {
        let l = 0,
            r = n - 1,
            idx = n;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const [startTime] = events[m];
            if (startTime <= endTime) l = m + 1;
            else {
                idx = Math.min(idx, m);
                r = m - 1;
            }
        }

        return idx === n ? -1 : idx;
    };

    const dp = Array(n).fill(0);
    let ans = 0,
        maxValue = 0;
    for (let i = n - 1; i >= 0; --i) {
        const [_, endTime, value] = events[i];
        const idx = bns(endTime);
        if (idx !== -1) ans = Math.max(ans, value + dp[idx]);
        maxValue = Math.max(maxValue, value);
        dp[i] = maxValue;
    }
    return Math.max(maxValue, ans);
};
