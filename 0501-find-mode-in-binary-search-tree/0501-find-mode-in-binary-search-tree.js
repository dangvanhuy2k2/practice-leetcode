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
 * @return {number[]}
 */
var findMode = function (root) {
    const m = new Map();
    const dfs = (root) => {
        if (!root) return;
        const sl = m.get(root.val) || 0;
        m.set(root.val, sl + 1);
        dfs(root.left);
        dfs(root.right);
    };

    dfs(root);
    let max = 0;
    for (const sl of m.values()) max = Math.max(max, sl);
    const ans = [];
    for (const [node, sl] of m.entries()) {
        if (sl !== max) continue;
        ans.push(node);
    }
    return ans;
};
