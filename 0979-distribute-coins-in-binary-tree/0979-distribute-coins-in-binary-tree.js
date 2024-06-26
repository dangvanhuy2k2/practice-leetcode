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
 * @return {number}
 */
var distributeCoins = function (root) {
    let ans = 0;
    const dfs = (root) => {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        ans += Math.abs(left) + Math.abs(right);
        let coin = left + right;
        if (root.val <= 0) return coin - 1;
        return coin + root.val - 1;
    };
    dfs(root);
    return ans;
};
