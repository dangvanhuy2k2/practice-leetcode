/**
 * @param {number} length
 */
const createKey = (snapId, index) => `${snapId}:${index}`;

var SnapshotArray = function (length) {
    this.snapId = 0;
    this.arrSnap = Array.from({ length }, () => []);
    this.cache = new Map();
    this.map = new Map();
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    this.map.set(index, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    for (const [i, val] of this.map.entries()) {
        const len = this.arrSnap[i].length;
        const key = createKey(this.snapId, i);
        if (len !== 0) {
            const lastSnapId = this.arrSnap[i][len - 1];
            const lastVal = this.cache.get(createKey(lastSnapId, i));
            if (lastVal === val) continue;
        }
        this.arrSnap[i].push(this.snapId);
        this.cache.set(key, val);
    }
    this.map = new Map();
    ++this.snapId;
    return this.snapId - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    let l = 0, r = this.arrSnap[index].length - 1, snapIdMax = -1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const snapId = this.arrSnap[index][m];
        if (snapId <= snap_id) {
            snapIdMax = Math.max(snapId, snapIdMax);
            l = m + 1;
        } else r = m - 1;
    }
    return this.cache.get(createKey(snapIdMax, index)) || 0;
};
/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */