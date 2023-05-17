/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    const mod = 1e9 + 7;
    const findArray = (num) => {
        let a = [], power = 1;
        while (num) {
            const digit = num % 2;
            if (digit) a.push(power);
            power *= 2;
            num = Math.floor(num / 2);
        }
        return a;
    }
    const a = findArray(n);
    return queries.map(([l, r]) => {
       let ans = 1;
       for(let i = l ; i <= r; ++i) {
           ans *= a[i];
           ans %= mod;
       }
       return ans;
    });
};