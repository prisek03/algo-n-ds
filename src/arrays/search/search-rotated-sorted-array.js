/**
 * Search in Rotated Sorted Array
 * 
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * You are given an integer array nums sorted in ascending order, and an integer target.

    Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    If target is found in the array return its index, otherwise, return -1.

    Example 1:

    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
 * 
 */

var binarySearch = (nums, start, end, target) => { 
    var len = nums.length;
    if (!len) {
        return -1;
    }
    var mid = Math.floor((start + end)/2);
    if (nums[mid] === target) {
        return mid;
    } else if (start === mid) {
        return nums[end] === target ? end : -1;
    } else  if (nums[mid] < target) {
        return binarySearch(nums, mid + 1, end, target);
    } else {
        return binarySearch(nums, start, mid - 1, target);
    }
}

var search = function(nums, target) {
    var len = nums.length;
    if (!len) {
        return -1;
    }
    // check middle value
    var mid = Math.floor(len/2);
    if (nums[mid] === target) {
        return mid;
    } else if (mid !== 0) {
        /**
         * if first value is less than middle value, then 0 - mid are sorted in ascending order
         */
        if (nums[0] < nums[mid]) {
            /**
             * If target lies in this sorted array, then use binary search to find the index
             */
            if (target <= nums[mid] && target >= nums[0]) {
                return binarySearch(nums, 0, mid, target);
            } else {
                /**
                 * Check in other half of the array
                 */
                var index = search(nums.slice(mid), target);
                return index !== -1 ? mid + index : index;
            }
        } else {
            /**
             * First half is not sorted array, then second half will be in sorted order,
             * check target exists in range and binary search
             */
            if (target <= nums[len - 1] && target >= nums[mid]) {
                return binarySearch(nums, mid, len - 1, target);
            } else {
                return search(nums.slice(0, mid), target);
            }
        }
    } else {
        return -1;
    }
};