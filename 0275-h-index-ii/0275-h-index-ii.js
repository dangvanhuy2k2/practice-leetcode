/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    const isValid = (h) =>
        citations.reduce((acc, c) => acc + (c >= h ? 1 : 0), 0) >= h;

    let l = 0,
        r = citations.length,
        ans = 0;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (isValid(m)) {
            ans = Math.max(ans, m);
            l = m + 1;
        } else r = m - 1;
    }
    return ans;
};
