/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    var len = arr.length,
        map = new Map(),
        sum = 0, leftBest = Number.MAX_SAFE_INTEGER,
        result = Number.MAX_SAFE_INTEGER;
    map.set(0, -1);
    for (var i = 0; i < len; i++) {
        sum += arr[i];
        map.set(sum, i);
    }
    sum = 0;
    for (i = 0; i < len; i++) {
        sum += arr[i];
        if (map.has(sum - target)) {
            leftBest = Math.min(leftBest, i - map.get(sum - target));
        }
        if (leftBest < Number.MAX_SAFE_INTEGER && map.has(sum + target)) {
            result = Math.min(result, leftBest + (map.get(sum + target) - i));
        }
    }
    return result < Number.MAX_SAFE_INTEGER ? result : -1;
};
