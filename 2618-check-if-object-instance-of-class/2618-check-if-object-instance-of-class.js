/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(classFunction === null || classFunction === undefined) return false;
    if(obj === null || obj === undefined) return false;
    if(!classFunction.prototype) return false;
    classFunction.prototype.dangvanhuy = true;
    let ans = obj.dangvanhuy === true;
    delete classFunction.prototype.dangvanhuy;
    return ans;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */