/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    const isSatify = (pos, numBuild, targetNumStr, targetNum) => {
        if (pos >= targetNumStr.length) {
            return numBuild === targetNum;
        }
        if(numBuild > targetNum) return false;
        let curNum = 0;
        for (let i = pos; i < targetNumStr.length; ++i) {
            curNum = curNum * 10 + Number(targetNumStr.charAt(i));
            if (isSatify(i + 1, numBuild + curNum, targetNumStr, targetNum)) return true;
        }
        return false;
    }
    let ans = 0;
    for (let i = 1; i <= n; ++i) {
        if (!isSatify(0, 0, String(i * i), i)) continue;
        ans += (i * i);
    }
    return ans;
};