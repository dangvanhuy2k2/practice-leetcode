/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    const mark = Array(n + 1).fill(true);
    let start = 1;
    const findNextPerson = () => {
        let cnt = 0;
        while (true) {
            cnt += mark[start] ? 1 : 0;
            if (cnt >= k) break;
            ++start;
            if (start > n) start = 1;
        }
    };
    for (let i = 1; i <= n - 1; ++i) {
        findNextPerson();
        mark[start] = false;
    }
    let ans = -1;
    for (let i = 1; i <= n; ++i) {
        if (!mark[i]) continue;
        ans = i;
        break;
    }
    return ans;
};
