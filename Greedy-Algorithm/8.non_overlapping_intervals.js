/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

    intervals.sort((a, b) => a[1] - b[1])
    // last end so far
    let k = -Infinity
    let count = 0
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] < k) {
            count++
        } else {
            k = intervals[i][1]
        }
    }

    return count
};