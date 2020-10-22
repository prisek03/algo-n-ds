



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /**
  * Add the current value with its previous sum
  * 
  * If the difference between current sum and target equals 0 means a subarray is found
  * Now clear the prefix set, so that we can get non-overlapping subarray
  * 
  * 
  */
var maxNonOverlapping = function(nums, target) {
    let numsLen = nums.length,
        prefixSet = new Set(),
        prevSum = 0,
        count = 0;
    for (let i = 0; i < numsLen; i++) {
        let curSum = prevSum + nums[i];
        if (curSum - target === 0 || prefixSet.has(curSum - target)) {
            count++;
            prefixSet.clear();
            prevSum = 0;
        } else {
            prefixSet.add(curSum);
            prevSum = curSum;
        }
    }
    return count;
};