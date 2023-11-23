/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    const cache = new Map();
    const Try = (s, l) => {
        const key = `${s}:${l}`;
        if (cache.has(key)) return cache.get(key);
        if (s.length === 1) {
            return s[0] === s2[l];
        }
        let mark = false;
        for (let i = 0; i < s.length - 1 && !mark; i++) {
            const a = s.substring(0, i + 1);
            const b = s.substring(i + 1);
            mark =
                (Try(a, l) && Try(b, l + i + 1)) ||
                (Try(b, l) && Try(a, l + b.length));
        }
        cache.set(key, mark);
        return mark;
    };
    return Try(s1, 0);
};
