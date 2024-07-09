/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
    let time = 0,
        totalTime = 0;
    for (const [startTime, timeWait] of customers) {
        time = Math.max(time, startTime);
        totalTime += time + timeWait - startTime;
        time += timeWait;
    }
    return totalTime / customers.length;
};
