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
    let cnt = 0, ans = 0;
    const a = [];
    const dfs = (curNode, i) => {
        if (i >= a.length) return;
        const val = a[i];
        if (!curNode.childs.has(val)) {
            ++ans;
            const newNode = new TrieNode();
            newNode.isEnd = true;
            curNode.childs.set(val, newNode);
        }
        dfs(curNode.childs.get(val), i + 1);
    }
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        cnt += val % p ? 0 : 1;
        if (cnt > k) {
            for(let j = 0; j < a.length; ++j) dfs(root, j);
            while (cnt > k) {
                const top = a.shift();
                cnt -= top % p ? 0 : 1;
            }
        }
        a.push(val);
    }
    for(let j = 0; j < a.length; ++j) dfs(root, j);
    return ans;
};