/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
    const n = stones.length;
    let visit = Array(n).fill(false);

    let l = 1,
        r = stones[n - 1],
        ans = stones[n - 1];

    const isValid = (dis) => {
        visit = Array(n).fill(false);
        let endDis = stones[n - 1] - dis;
        for (let i = n - 1; i >= 0; --i) {
            if (stones[i] >= endDis) continue;
            else {
                visit[i + 1] = true;
                endDis = stones[i + 1] - dis;
                if (endDis > stones[i]) return false;
            }
        }
        endDis = dis;
        for (let i = 0; i < n; ++i) {
            if (visit[i]) continue;
            if (endDis < stones[i]) return false;
            endDis = stones[i] + dis;
        }
        return true;
    };

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (isValid(m)) {
            ans = Math.min(ans, m);
            r = m - 1;
        } else l = m + 1;
    }

    return ans;
};
