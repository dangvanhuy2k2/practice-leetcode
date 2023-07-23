/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
    if (n % 2 === 0) return [];

    const cache = Array.from({ length: n + 1}, () => []);

    const backtrack = (n) => {
        if (n === 1) return [new TreeNode(0)];
        if (cache[n].length !== 0) return cache[n];

        for (let i = 1; i < n; i += 2) {
            const childLefts = backtrack(i);
            const childRights = backtrack(n - 1 - i);

            for (const left of childLefts) {
                for (const right of childRights) {
                    const root = new TreeNode(0);
                    root.left = left;
                    root.right = right;
                    cache[n].push(root);
                }
            }
        }

        return cache[n];
    };

    const ans = backtrack(n);
    return ans;
};
