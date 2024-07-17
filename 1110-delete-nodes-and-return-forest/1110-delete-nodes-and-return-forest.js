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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    const set = new Set(to_delete);
    let ans = [];
    const dfs = (node) => {
        if (!node) {
            return null;
        }
        const l = dfs(node.left);
        const r = dfs(node.right);
        const val = node.val;
        if (set.has(val)) {
            if (l) ans.push(l);
            if (r) ans.push(r);
            return null;
        }
        node.left = l;
        node.right = r;
        return node;
    };
    const tmp = dfs(root);
    if (tmp) ans.push(tmp);
    return ans;
};
