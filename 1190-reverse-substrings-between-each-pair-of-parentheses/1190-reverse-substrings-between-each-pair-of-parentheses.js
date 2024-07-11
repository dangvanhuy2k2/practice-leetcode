/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [];
    let res = "";
    let index = 0;
    while (index < s.length && s[index] !== "(") {
        res += s[index++];
    }
    for (; index < s.length; index++) {
        const c = s[index];
        if (c === ")") {
            let reversed = "";
            while (stack.length) {
                const lastC = stack.pop();
                if (lastC === "(") break;
                reversed = lastC + reversed;
            }
            stack.push(reversed.split("").reverse().join(""));
        } else stack.push(c);
    }
    console.log(stack);
    return res + stack.join("");
};
