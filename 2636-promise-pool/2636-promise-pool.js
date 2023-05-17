/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    return new Promise((res) => {
        const len = functions.length;
        let i = 0,
            cntPromiseResolve = 0;
        const run = () => {
            if (cntPromiseResolve >= len) return res();
            if (i >= len) return;
            functions[i++]().then(() => {
                ++cntPromiseResolve;
                run();
            })
        }
        for (let j = 0; j < n; ++j) {
            run();
        }
    })
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */