// problem: LeetCode #1 - two sum
// HashMap solution: O(n) time, O(n) space

let nums = [5, 1, 9, 6]; // DSA two sum
let target = 7;

let map = {};

    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement  = target - currentNum;

        if (complement in map) {
            return[map[complement], 1];
        }
        map[currentNum] = i
    };



