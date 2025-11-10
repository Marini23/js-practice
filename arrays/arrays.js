// Task 1

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // check if complement already exists in the map

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // otherwise, store the current number and its index
    map.set(nums[i], i);
  }
};

const twoSumAlternative = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSumAlternative([2, 7, 11, 15], 9));
