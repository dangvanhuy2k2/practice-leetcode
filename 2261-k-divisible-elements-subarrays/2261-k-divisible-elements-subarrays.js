/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
function TrieNode() {
    this.childs = new Map();
    this.isEnd = false;
}

var countDistinct = function (nums, k, p) {
    const root = new TrieNode();
    let cnt = 0, ans = 0, l = 0;
    const dfs = (curNode, i, end) => {
        if (i >= end) return;
        const val = nums[i];
        if (!curNode.childs.has(val)) {
            ++ans;
            const newNode = new TrieNode();
            newNode.isEnd = true;
            curNode.childs.set(val, newNode, end);
        }
        dfs(curNode.childs.get(val), i + 1, end);
    }
    for (let r = 0; r < nums.length; r++) {
        const val = nums[r];
        cnt += val % p ? 0 : 1;
        if (cnt <= k) continue;
        for (let j = l; j < r; ++j) dfs(root, j, r);
        while (cnt > k) {
            const num = nums[l++];
            cnt -= num % p ? 0 : 1;
        }
    }
    for (let j = l; j < nums.length; ++j) dfs(root, j, nums.length);
    return ans;
};