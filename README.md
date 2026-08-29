# JavaScript
// DSA Problem: Two Sum (LeetCode #1) - Brute Force ($O(n^2)$) & Optimized Solutions

// LeetCode  - Two Sum (Brute Force)

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums [i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
