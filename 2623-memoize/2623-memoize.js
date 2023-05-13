/**
 * @param {Function} fn
 */
function memoize(fn) {
    const m = new Map();
    const createKey = (args) => args.join(':');
    return function(...args) {
        const key = createKey(args);
        if(!m.has(key)) m.set(key , fn(...args));
        return m.get(key);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */