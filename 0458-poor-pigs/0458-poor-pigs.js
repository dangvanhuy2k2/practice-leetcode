/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    const t = Math.floor(minutesToTest / minutesToDie);
    let i = 0;
    while (true) {
        const tmp = (t + 1) ** i;
        if (tmp >= buckets) break;
        ++i;
    }
    return i;
};
