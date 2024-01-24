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
var pseudoPalindromicPaths = function (root) {
    const m = Array(10).fill(0);
    const dfs = (node) => {
        let cnt = 0;
        if (!node.left && !node.right) {
            m[node.val] += 1;
            const cntOld = m.reduce((acc, val) => acc + (val % 2));
            m[node.val] -= 1;
            return cntOld <= 1 ? 1 : 0;
        }
        m[node.val] += 1;
        if (node.left) cnt += dfs(node.left);
        if (node.right) cnt += dfs(node.right);
        m[node.val] -= 1;
        return cnt;
    };
    return dfs(root);
};
