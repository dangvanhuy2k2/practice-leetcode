/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let ans = 0;
    const used = new Set();
    const dfs = (node) => {
        if (!node) return [];
        if (!node.left && !node.right) return [1];
        const disLefts = dfs(node.left);
        const disRights = dfs(node.right);

        for (let i = 0; i < disLefts.length; i++) {
            const d1 = disLefts[i];
            for (let j = 0; j < disRights.length; ++j) {
                const d2 = disRights[j];
                if (d1 + d2 > distance) continue;
                ++ans;
            }
        }
        return [...disLefts.map((d) => d + 1), ...disRights.map((d) => d + 1)];
    };
    dfs(root);
    return ans;
};