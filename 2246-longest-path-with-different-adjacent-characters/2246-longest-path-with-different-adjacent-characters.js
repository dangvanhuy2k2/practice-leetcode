/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const adj = Array.from({length: parent.length} , () => []);
    for(let i = 1; i < parent.length; ++i) {
        let par = parent[i];
        adj[par].push(i);
    }
    let res = 1;
    const dfs = (u) => {
        if(!adj[u].length) return 1;
        const sizeChild = [];
        let c = s.charAt(u);
        for(let v of adj[u]) {
            let size = dfs(v);
            if(s.charAt(v) !== c) sizeChild.push(size);
        }
        if(!sizeChild.length) return 1;
        let longPath = 1;
        sizeChild.sort((a , b) => +b - +a)
        for(let i = 0 ; i < Math.min(2 , sizeChild.length); ++i) {
            longPath += sizeChild[i];
        }
        res = Math.max(res , longPath)
        return sizeChild[0] + 1;
    }
    dfs(0);
    return res;
};