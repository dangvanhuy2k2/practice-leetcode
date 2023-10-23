/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
     if(n <= 0) return false;
     let l = 0 , r = 31;
     while(l <= r) {
        const m = Math.floor((l + r) / 2);
        const num = 4 ** m;
        if(num === n) return true;
        else if(num < n) {
            l = m + 1;
        } else r = m - 1;
     }  
     return false;
};