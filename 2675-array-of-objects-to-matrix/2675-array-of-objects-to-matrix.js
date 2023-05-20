/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
    const m = new Map();
    const build = (val, strKey, idxRow) => {
        const type = typeof val;
        if (val === null || (!Array.isArray(val) && type !== "object")) {
            if (strKey.length === "") return;
            const key = strKey.join('.');
            const a = m.get(key) || [];
            a.push({
                idxRow,
                val
            });
            m.set(key, a);
            return;
        }
        for (const key of Object.keys(val)) {
            build(val[key], [...strKey, key], idxRow);
        }
    }
    for (let i = 0; i < arr.length; ++i) {
        const val = arr[i];
        build(val, [], i);
    }
    const keys = [...m.keys()];
    keys.sort((k1, k2) => k1.localeCompare(k2));
    const ans = Array.from({ length: arr.length }, () => Array(keys.length).fill(""));
    for (let i = 0; i < keys.length; ++i) {
        const k = keys[i];
        const arrValue = m.get(k);
        for (const { idxRow, val } of arrValue) {
            ans[idxRow][i] = val;
        }
    }
    return [keys, ...ans];
};