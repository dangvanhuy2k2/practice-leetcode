/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort((n1, n2) => n1 - n2);
    const tmp = money;
    let min = Number.MAX_VALUE,
        min1 = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; ++i) {
        if (prices[i] <= min) {
            min1 = Math.min(min1, min);
            min = prices[i];
        } else min1 = Math.min(min1, prices[i]);
    }
    money -= min + min1;
    return money < 0 ? tmp : money;
};
