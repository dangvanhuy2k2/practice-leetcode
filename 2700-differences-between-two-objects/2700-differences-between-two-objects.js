/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    const dfs = (val1, val2) => {
        if (val1 === val2) return null;
        const t1 = typeof val1, t2 = typeof val2;
        if (t1 !== t2) return [val1, val2];
        if (t1 !== "object") return val1 === val2 ? null : [val1, val2];
        if (val1 === null || val2 === null) return [val1, val2];
        if (Array.isArray(val1) !== Array.isArray(val2)) return [val1, val2];
        const diff = {};
        const obj = Object.keys(val1).length < Object.keys(val2).length ? val1 : val2;
        for (const key of Object.keys(obj)) {
            if (!val1.hasOwnProperty(key) || !val2.hasOwnProperty(key)) continue;
            const valDiff = dfs(val1[key], val2[key]);
            if (!valDiff) continue;
            diff[`${key}`] = valDiff;
        }
        return Object.keys(diff).length <= 0 ? null : diff;
    }
    const diff = dfs(obj1, obj2);
    return diff || {};
};