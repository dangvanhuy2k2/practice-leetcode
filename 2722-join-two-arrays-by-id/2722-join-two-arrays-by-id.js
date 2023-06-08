/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const mergeTwoObj = (o1, o2) => {
        const res = { ...o1 };
        for (const key of Object.keys(o2)) {
            res[key] = o2[key];
        }
        return res;
    }

    const ans = [];
    const m = new Map();
    for (const o1 of arr1) {
        const { id } = o1;
        m.set(id, o1);
    }
    for (const o2 of arr2) {
        const { id } = o2;
        const o1 = m.get(id) || {};
        m.set(id, mergeTwoObj(o1, o2));
    }

    for (const o of m.values()) {
        ans.push(o);
    }
    ans.sort((o1, o2) => o1.id - o2.id);
    return ans;

};