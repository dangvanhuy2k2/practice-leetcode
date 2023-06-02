/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
    const checkCollision = (b1, b2) => {
        let dis = 0;
        for (let i = 0; i <= 1; ++i) dis += Math.pow(b1[i] - b2[i], 2);
        return b1[2] >= Math.sqrt(dis);
    }
    let isDetonate = [];
    const dfs = (i) => {
        let cnt = 1;
        for (let j = 0; j < bombs.length; ++j) {
            if (i === j) continue;
            if (!checkCollision(bombs[i], bombs[j]) || isDetonate[j]) continue;
            isDetonate[j] = true;
            cnt += dfs(j);
        }
        return cnt;
    }
    let ans = 0;
    for (let i = 0; i < bombs.length; ++i) {
        isDetonate = Array(bombs.length).fill(false);
        isDetonate[i] = true;
        const cnt = dfs(i);
        ans = Math.max(ans, cnt);
    }
    return ans;
};