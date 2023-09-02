/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++) {
        let sum = nums[i] + nums[i+1];
        if(sum == target) {
            return [i, i+1];
        }
    }
};