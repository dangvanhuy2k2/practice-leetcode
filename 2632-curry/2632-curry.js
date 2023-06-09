/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    let args = [];
    return function curried(...par) {
        args = [...args , ...par];
        if(args.length === fn.length) return fn(...args);
        return curried;
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
