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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    const adj = new Map();
    const update = (n1, n2) => {
        const a = adj.get(n1) || [];
        a.push(n2);
        adj.set(n1, a);
    };
    const addMap = (node, prevVal) => {
        if (!node) return;
        if (prevVal !== -1) {
            update(node.val, prevVal);
            update(prevVal, node.val);
        }
        addMap(node.left, node.val);
        addMap(node.right, node.val);
    };
    const dfs = (val, prevVal) => {
        console.log(val);
        let max = 0;
        for (const nextVal of adj.get(val) || []) {
            if (nextVal === prevVal) continue;
            max = Math.max(max, dfs(nextVal, val));
        }
        return max + 1;
    };
    addMap(root, -1);
    const ans = dfs(start);
    return ans - 1;
};
