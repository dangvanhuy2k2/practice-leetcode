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
var averageOfSubtree = function (root) {
    let cnt = 0;
    const dfs = (root) => {
        if (!root) return [0, 0];
        const [sumLeft, slLeft] = dfs(root.left);
        const [sumRight, slRight] = dfs(root.right);
        const sum = root.val + sumLeft + sumRight;
        const sl = 1 + slLeft + slRight;
        cnt += Math.floor(sum / sl) === root.val ? 1 : 0;
        return [sum, sl];
    };
    dfs(root);
    return cnt;
};
