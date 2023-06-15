/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    const firstVal = 1, lastVal = 2 * (n - 1) + 1;
    const numGoal = (firstVal + lastVal) / 2;
    let i = 1, ans = 0;
    while(i < numGoal) {
      ans += numGoal - i;
      i += 2;
    }
    return ans;
};