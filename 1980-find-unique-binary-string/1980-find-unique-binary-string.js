/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const n = nums.length;
    const set = new Set(nums);
    const a = [];
    const backtrack = (pos) => {
        if (pos >= n) {
            const s = a.join('');
            console.log(s);
            return set.has(s) ? "" : s;
        }
        for (let i = 0; i <= 1; ++i) {
            a.push(`${i}`);
            const s = backtrack(pos + 1);
            if (s !== "") return s;
            a.pop();
        }
        return "";
    };

    return backtrack(0);
};
