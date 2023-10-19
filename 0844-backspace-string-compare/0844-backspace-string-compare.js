/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const type = (str) => {
        const sa = []
        for(const c of str) {
            if(c === '#') sa.pop();
            else sa.push(c)
         }  
         return sa.join('');
     }
     return type(s) === type(t);
};