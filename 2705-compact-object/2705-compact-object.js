/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    const dfs = (val) => {
        const type = typeof val;
        if (type !== "object" || val === null) return [Boolean(val), val];
        const ans = Array.isArray(val) ? [] : {};
        for (const key of Object.keys(val)) {
            const [isTruesy, valReturn] = dfs(val[key]);
            if (isTruesy === false) continue;
            if (Array.isArray(ans)) ans.push(valReturn);
            else ans[key] = valReturn;
        }
        return [true, ans];
    }
    const [_, ans] = dfs(obj);
    return ans;
};