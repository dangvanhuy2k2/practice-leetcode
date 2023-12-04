/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    num += "-";
    let prev = num.charAt(0);
    let cnt = 1, ans = "";
    for(let i = 1; i < num.length; ++i) {
        if(num.charAt(i) === prev) {
            ++cnt;
        } else {
            if(cnt >= 3) {
                const newNum = Array(3).fill(prev).join("")
                ans = ans === "" ? newNum : ans.localeCompare(newNum) <= 0 ? newNum : ans;
            }
            cnt = 1;
        }
        prev = num.charAt(i);
    }
    return ans === -1 ? "" : String(ans);
};