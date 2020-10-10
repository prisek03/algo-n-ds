/** Given an array of integers arr and an integer target.

    You have to find two non-overlapping sub-arrays of arr each with sum equal target.
    There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// Solution 1 - two pass - check current subarray and valid right subarray

var minSumOfLengths = function(arr, target) {
    var len = arr.length,
        map = new Map(),
        sum = 0, leftBest = Number.MAX_SAFE_INTEGER,
        result = Number.MAX_SAFE_INTEGER;

    /* Set -1 for sum value 0 */
    map.set(0, -1);

    /* Add prefix sum and its index in map */
    for (var i = 0; i < len; i++) {
        sum += arr[i];
        map.set(sum, i);
    }
    sum = 0;
    for (i = 0; i < len; i++) {
        sum += arr[i];

        /* If the map has the diff, subarray of target sum exists */
        if (map.has(sum - target)) {
            /* get the min length between prev best and current subarray length */
            leftBest = Math.min(leftBest, i - map.get(sum - target));
        }

        /* If left best exists and right subarray of target sum exists */
        if (leftBest < Number.MAX_SAFE_INTEGER && map.has(sum + target)) {
            /* add sum of leftBest and right subarray and assign to answer if its minimum */
            result = Math.min(result, leftBest + (map.get(sum + target) - i));
        }
    }

    /* If both left and right subarray exists, return result */
    return result < Number.MAX_SAFE_INTEGER ? result : -1;
};

// Solution 2 - single pass - sliding window technique

var minSumOfLengths = function(arr, target) {
    var len = arr.length,
        best = [],
        soFarBest = Number.MAX_SAFE_INTEGER, sum = 0, start = 0,
        result = Number.MAX_SAFE_INTEGER;
    
    for (var i = 0; i < len; i++) {
        /* best array will have previous min length subarray */
        best[i] = Number.MAX_SAFE_INTEGER;
        sum += arr[i];

        /* if sum exceeds target, move window from left to get desired sum */
        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        /* If current window sum equals the target, get the current window size and compare with previous min window length */
        if (sum === target) {
            soFarBest = Math.min(soFarBest, i - start + 1);

            /* If window size before the window start exists, 
            which means there is already a subarray exists, 
            so add it with current window and compare with answer */
            if (start > 0 && best[start-1] < Number.MAX_SAFE_INTEGER) {
                result = Math.min(result, best[start-1] + i - start + 1);
            }
        }
        best[i] = soFarBest;
    }
    return result < Number.MAX_SAFE_INTEGER ? result : -1;
};
