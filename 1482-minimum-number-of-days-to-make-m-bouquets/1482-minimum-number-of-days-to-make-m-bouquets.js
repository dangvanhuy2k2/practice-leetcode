/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    const [minDay, maxDay] = bloomDay.reduce((acc, day) => [Math.min(acc[0], day), Math.max(acc[1], day)], [Number.MAX_VALUE, Number.MIN_VALUE]);

    let ans = Number.MAX_VALUE, l = minDay, r = maxDay;
    const isSatify = (d) => {
        let cntBouquets = 0, cnt = 0;
        for (let i = 0; i < bloomDay.length; ++i) {
            if (bloomDay[i] <= d) {
                ++cnt;
                if (cnt < k) continue;
                cnt = 0;
                ++cntBouquets;
            }
            else cnt = 0;
        }
        return cntBouquets >= m;

    }
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (isSatify(m)) {
            r = m - 1;
            ans = Math.min(ans, m);
        }
        else l = m + 1;
    }
    return ans === Number.MAX_VALUE ? -1 : ans;
};