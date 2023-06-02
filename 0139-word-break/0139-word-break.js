/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const n = s.length;
    const dp = Array(n).fill(-1);
    const set = new Set(wordDict);
    const dfs = (i, curWord) => {
        if (i >= n) {
            return set.has(curWord) || curWord === "";
        }
        // add 
        if (dfs(i + 1, curWord + s.charAt(i))) return true;
        // split
        let ans = false;
        if (set.has(curWord)) {
            if (dp[i] !== -1) {
                ans = dp[i] ? true : false;
            } else ans = dfs(i + 1, s.charAt(i));
            dp[i] = ans ? 1 : 0;
        }
        return ans;
    }
    return dfs(0, "");
};