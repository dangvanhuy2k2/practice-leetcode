/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
    const n = nums1.length,
        m = nums2.length;
    const map = Array.from({length: n}, () => Array(m).fill(-1));
    const find = (i, j) => {
        if (i >= n || j >= m) return 0;
        if (map[i][j] !== -1) return map[i][j];
        let max = 0;
        for (let u = i; u < n; ++u) {
            for (let v = j; v < m; ++v) {
                if (nums1[u] !== nums2[v]) continue;
                max = Math.max(max, 1 + find(u + 1, v + 1));
            }
        }
        map[i][j] = max;
        return max;
    };
    return find(0, 0);
};
