/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    const len = functions.length;
    let cntPResolve = 0;
    const ans = Array(len).fill(0);
    return new Promise((res, rej) => {
        for (let i = 0; i < len; ++i) {
            const f = functions[i];
            f().then((val) => {
                ++cntPResolve;
                ans[i] = val;
                if (cntPResolve < len) return;
                res(ans);
            }).catch((err) => {
                rej(err);
            })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */