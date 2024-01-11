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
var maxAncestorDiff = function (root) {
    let ans = 0;
    const MIN = -1,
        MAX = Number.MAX_VALUE;
    const dfs = (node, min, max) => {
        if (!node) return;
        if (min !== MAX && max !== MIN) {
            ans = Math.max(
                Math.abs(node.val - min),
                Math.abs(node.val - max),
                ans
            );
        }
        dfs(node.left, Math.min(node.val, min), Math.max(node.val, max));
        dfs(node.right, Math.min(node.val, min), Math.max(node.val, max));
    };
    dfs(root, MAX, MIN);
    return ans;
};
