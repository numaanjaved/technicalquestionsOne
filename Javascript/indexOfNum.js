// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Question from leetcode.com.



let twoSum = (nums, target) => {
    let sum;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[i] + nums[j];
            if (sum === target) {
                let indices = [i, j]
                return indices
            }
        }
    }
    return null;
}
let nums = [2, 5, 5, 11], target = 10;
let result = twoSum(nums, target);
if (result !== null) {
    console.log(result);
} else {
    console.log(`Sorry no matching....`)
}