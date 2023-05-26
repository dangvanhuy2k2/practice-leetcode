/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
    nums.sort((n1, n2) => n1 - n2);
    const applyCt = (n) => {
        let m = n + 1;
        if (n % 2 === 0) n /= 2;
        else m /= 2;
        return n * m;
    }
    let ans = 0;
    const calSumAdd = (start, end) => applyCt(end) - applyCt(start);
    let prevNum = 0;
    for (const num of nums) {
        if (prevNum === num) continue;
        const distance = Math.min(num - prevNum - 1, k);
        ans += calSumAdd(prevNum, prevNum + distance);
        prevNum = num;
        k -= distance;
        if (k === 0) break;
    }
    ans += calSumAdd(prevNum, prevNum + k);
    return ans;
};