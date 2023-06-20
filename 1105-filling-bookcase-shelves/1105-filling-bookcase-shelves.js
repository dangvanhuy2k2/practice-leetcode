/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    const map = new Map();
    const createKey = (idx, level, remainWidth) =>
        `${idx}:${level}:${remainWidth}`;
    const backtrack = (pos, level, remainWidth, maxHeight) => {
        if (pos >= books.length) return maxHeight;
        let key = createKey(pos, level, remainWidth);
        if (map.has(key)) return map.get(key);
        const [thickness, height] = books[pos];
        let minHeight = 1e18;
        // dat
        if (remainWidth >= thickness) {
            minHeight = Math.min(
                minHeight,
                backtrack(
                    pos + 1,
                    level,
                    remainWidth - thickness,
                    Math.max(maxHeight, height)
                )
            );
        }
        // ko dat
        minHeight = Math.min(
            minHeight,
            maxHeight +
                backtrack(pos + 1, level + 1, shelfWidth - thickness, height)
        );
        map.set(key, minHeight);
        return minHeight;
    };
    const ans = backtrack(1, 0, shelfWidth - books[0][0], books[0][1]);
    return ans;
};
