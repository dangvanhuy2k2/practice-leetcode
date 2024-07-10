/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let level = 0;
    for (const l of logs) {
        if (l === "../") {
            level--;
        } else if (l === "./") continue;
        else ++level;
        level = Math.max(level, 0);
    }
    return level;
};
