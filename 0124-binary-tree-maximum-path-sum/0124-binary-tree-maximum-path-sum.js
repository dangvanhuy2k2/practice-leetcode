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
var maxPathSum = function(root) {
    const MIN_VALUE = -1e9;
    let ans = MIN_VALUE;
    const dfs = (root) => {
        if(!root) return MIN_VALUE;
        const sumLeft = dfs(root.left);
        const sumRight = dfs(root.right);

        const maxSum = Math.max(sumLeft,sumRight);
        ans = Math.max(ans, maxSum, maxSum + root.val, root.val + sumLeft + sumRight, root.val);
        
        return Math.max(maxSum + root.val, root.val)
    }
    dfs(root);
    return ans;
};