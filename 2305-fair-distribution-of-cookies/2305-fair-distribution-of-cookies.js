/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    const n = cookies.length;
    const a = Array(k).fill(0);
    const cnt = [...a];
    const max = n - (k - 1);
    let ans = Number.MAX_VALUE;
    const backtrack = (pos) => {
        if (pos >= n) {
            const larger = a.reduce((acc, n) => Math.max(acc, n));
            ans = Math.min(ans, larger);
            return;
        }
        for (let i = 0; i < k; ++i) {
            if(cnt[i] >= max) continue;
            a[i] += cookies[pos];
            ++cnt[i];
            backtrack(pos + 1);
            a[i] -= cookies[pos];
            --cnt[i];
        }
    }
    backtrack(0);
    return ans;
};