/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
    const cal = (c) => {
        let dis = 0;
        time = 0;
        for (let i = 0; i < garbage.length; ++i) {
            const g = garbage[i];
            if (g.includes(c)) {
                time += dis + g.split("").filter((tmp) => tmp === c).length;
                dis = 0;
            }
            dis += travel[i];
        }
        return time;
    };

    const a = ["M", "P", "G"];
    return a.reduce((acc, c) => acc + cal(c), 0);
};
