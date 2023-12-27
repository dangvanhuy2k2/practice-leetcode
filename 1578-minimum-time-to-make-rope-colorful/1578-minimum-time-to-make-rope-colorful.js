/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
    colors += "*";
    neededTime.push(-1);
    let t = neededTime[0],
        maxTime = neededTime[0],
        prevColor = colors[0];
    let ans = 0;
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === prevColor) {
            maxTime = Math.max(maxTime, neededTime[i]);
            t += neededTime[i];
        } else {
            ans += t - maxTime;
            t = neededTime[i];
            maxTime = neededTime[i];
        }
        prevColor = colors[i];
    }
    return ans;
};
