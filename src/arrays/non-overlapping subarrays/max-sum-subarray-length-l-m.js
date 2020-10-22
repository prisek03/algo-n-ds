
/**
 * https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * 
 * Given an array A of non-negative integers, return the maximum sum of elements in two non-overlapping (contiguous) subarrays,
 *  which have lengths L and M.  (For clarification, the L-length subarray could occur before or after the M-length subarray.)

    Formally, return the largest V for which V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:

    0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
    0 <= j < j + M - 1 < i < i + L - 1 < A.length.
    

    Example 1:

    Input: A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
    Output: 20
    Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
 */

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 * 
 * Have window of size L+M
 * 
 * Get the value of L sum and M sum from the current window and compare with previous value
 * 
 * Get the max value of L and M and we have two subarray with L max and M max
 * 
 * The maximum of these two subarray will be compared with previous result
 * 
 */
var maxSumTwoNoOverlap = function(A, L, M) {
    var len = A.length;
    
    /**
     * Convert input array to prefix sum array
     */
    for (var i = 1; i < len; i++) {
        A[i] += A[i-1];
    }
    
    /**
     * Array length will always be L+M
     * So assuming the first L+M window to be absolute result
     */
    var maxL = A[L-1], 
        maxM = A[M-1],
        result =  A[L+M-1];
    /**
     * Iterating from second window to the length of the array
     * i will be the end index of the window
     */
    for (i = L+M; i < len; i++) {
        // Get current L sum from i and compare with previous L value
        maxL = Math.max(maxL, A[i-M] - A[i-M-L]);
        // Get current M sum from i and compare with previous M value
        maxM = Math.max(maxM, A[i-L] - A[i-L-M]);
        // compare with previous result, subarray with maxL, subarray with maxM
        result = Math.max(result, maxL+A[i]-A[i-M], maxM+A[i]-A[i-L]);
    }
    
    return result;
    
};