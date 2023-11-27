/**
 * @param {number} r
 * @return {number}
 */
var knightDialer = function (n) {
    if(n === 1) return 10;
    const dx = [-2, -2, -1, 1, 2, 2, 1, -1];
    const dy = [-1, 1, 2, 2, 1, -1, -2, -2];
    const b = [];
    for (let i = 1; i <= 9; i += 3) {
        const a = [];
        for (let j = i; j < i + 3; ++j) a.push(j);
        b.push(a);
    }
    b.push([-1, 0, -1]);
    const cnt = Array.from({ length: 10 }, () => []);
    const r = b.length, c = b[0].length;

    const cntPath = (i, j) => {
        const num = b[i][j];
        for (let k = 0; k < dx.length; ++k) {
            const i1 = i + dx[k];
            const j1 = j + dy[k];
            if (i1 < 0 || j1 < 0 || i1 >= r || j1 >= c || b[i1][j1] === -1) continue;
            cnt[num].push(b[i1][j1]);
        }
    }
    for (let i = 0; i < r; ++i) {
        for (let j = 0; j < c; ++j) {
            if (b[i][j] === -1) continue;
            cntPath(i, j);
        }
    } 
    const MOD = (10 ** 9) + 7;
    let dp = Array(10).fill(1);
    for(let i = 2; i <= n ; ++i) {
        const newDp = Array(10).fill(0);
        let total = 0;
        for(let j = 0 ; j <= 9; ++j) {
            if(!dp[j]) continue;
            for(let nextNum of cnt[j]) {
                newDp[nextNum] += dp[j];
                newDp[nextNum] %= MOD;
            }
        }
        dp = newDp;
    }
    return dp.reduce((acc , n) => (acc + n ) % MOD , 0);
};