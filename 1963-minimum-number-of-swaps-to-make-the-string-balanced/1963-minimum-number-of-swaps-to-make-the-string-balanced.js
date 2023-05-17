/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    const stack = [];
    const getTop = () => stack[stack.length - 1];
    for(const c of s) {
        if(c === '[') stack.push(c);
        else {
            if(s.length === 0 || getTop() !== '[') stack.push(c);
            else stack.pop();
        }
    }
    const len = stack.length;
    return Math.floor(len / 4) + (len % 4 ? 1 : 0);
};