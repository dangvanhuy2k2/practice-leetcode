/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const convertToNum = (c) => c.charCodeAt() - 'a'.charCodeAt();
    const convertToChar = (num) =>  String.fromCharCode('a'.charCodeAt() + num);
    const cnt = Array(26).fill(0);
    for(const c of t) {
        ++cnt[convertToNum(c)]
    }
    for(const c of s) {
        --cnt[convertToNum(c)];
    }

    let ans = "";
    for(let i = 0; i < 26; ++i) {
        if(cnt[i] === 0) continue;
        ans += convertToChar(i);
    }
    return ans;
};