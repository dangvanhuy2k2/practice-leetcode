
var TimeLimitedCache = function () {
    this.m = new Map();
    this.id = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const isExit = this.m.has(key);
    if (isExit) {
        const idSetTimeoutPrev = this.id.get(key);
        clearTimeout(idSetTimeoutPrev);
    }
    const idSetTimeout = setTimeout(() => {
        this.m.delete(key);
        this.id.delete(key);
    }, duration)
    this.m.set(key, value);
    this.id.set(key, idSetTimeout);
    return isExit;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.m.has(key) ? this.m.get(key) : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.m.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */