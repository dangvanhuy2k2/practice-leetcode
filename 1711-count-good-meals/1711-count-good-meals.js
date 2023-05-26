/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
    const maxD = deliciousness.reduce((acc, d) => Math.max(d , acc));
    const max = maxD * 2;
    const power = [];
    let tmp = 1;
    while (tmp <= max) {
        power.push(tmp);
        tmp *= 2;
    }
    const MOD = 1e9 + 7;
    let ans = 0;
    const m = new Map();
    for (const d of deliciousness) {
        for (const p of power) {
            if (d > p) continue;
            const targetNum = p - d;
            ans += m.get(targetNum) || 0;
            ans %= MOD;
        }
        m.set(d, (m.get(d) || 0) + 1);
    }
    return ans;
};