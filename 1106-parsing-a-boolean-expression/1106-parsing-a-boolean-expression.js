/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
    const dfs = (expression) => {
        console.log("expression: ", expression)
        const len = expression.length;
        if (len === 1) return expression === "f" ? false : true;
        const c = expression.charAt(0);
        const str = expression.substring(2, len - 1) + ",";
        const bools = [];
        let cnt = 0;
        let s = "";
        for (let c of str) {
            if (c === ',' && cnt === 0) {
                bools.push(dfs(s));
                s = "";
                continue;
            }
            s += c;
            if (c === ")" || c === "(") cnt += c === ")" ? -1 : 1;
        }
        if (c === "!") return !bools[0];
        if (c === "|") return bools.includes(true);
        return bools.every(b => b);
    }
    const ans = dfs(expression);
    return ans;
};