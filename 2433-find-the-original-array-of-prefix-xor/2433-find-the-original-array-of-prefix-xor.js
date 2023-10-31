/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let prev = pref[0];
    for(let i = 1; i < pref.length; ++i) {
        let tmp = pref[i];
        pref[i] = prev ^ tmp;
        prev = tmp;
    }
    return pref;
};