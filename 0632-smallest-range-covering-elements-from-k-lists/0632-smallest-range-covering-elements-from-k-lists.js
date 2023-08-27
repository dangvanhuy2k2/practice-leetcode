/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
    const a = [];
    for (let i = 0; i < nums.length; ++i) {
        for (const val of nums[i]) a.push([val, i]);
    }
    a.sort((el1, el2) => {
        if (el1[0] !== el2[0]) return el1[0] - el2[0];
        return el1[1] - el1[1];
    });
    const ans = [-1e9, 1e9];
    const cnt = Array(nums.length).fill(0);
    let l = 0,
        sum = 0;
    for (let r = 0; r < a.length; ++r) {
        const [valRight, idxRight] = a[r];
        if (cnt[idxRight] == 0) {
            ++sum;
        }
        ++cnt[idxRight];
        while (sum >= nums.length) {
            const [valLeft, idxLeft] = a[l];
            let isUpdate = false;
            if (valRight - valLeft < ans[1] - ans[0]) {
                isUpdate = true;
            } else {
                if (valLeft < ans[0]) isUpdate = true;
            }
            if (isUpdate) {
                ans[0] = valLeft;
                ans[1] = valRight;
            }
            --cnt[idxLeft];
            if (cnt[idxLeft] === 0) --sum;
            ++l;
        }
    }
    return ans;
};
