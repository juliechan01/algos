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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashmap = new Map(); // Creating the hash map

    for(i = 0; i < nums.length; i++) {
        let value = target - nums[i]; // Set difference to target value to see if they match when looping through hashmap

        // Refer back to array & check to see if array has solution
        if (hashmap.has(value)) {
            return [hashmap.get(value), i];
        }

        // Return indices that create target value from array
        hashmap.set(nums[i], i);
    }
};