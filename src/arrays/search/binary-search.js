/**
 * https://leetcode.com/problems/binary-search/
 * 
 * Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
 * If target exists, then return its index, otherwise return -1.
 */

var search = function(nums, target) {
    var len = nums.length;
    if (!len) {
        return -1;
    }
    var mid = Math.floor(len/2);
    if (nums[mid] === target) {
        return mid;
    } if (mid !== 0) {
        if (nums[mid] < target) {
            var index = search(nums.slice(mid, len), target);
            if (index !== -1) {
                return mid + index;
            }
            return index;
        } else if (nums[mid] > target) {
            return search(nums.slice(0, mid), target);
        } 
    } else {
        return -1;
    }
};