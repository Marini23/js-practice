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

// console.log(twoSum([2, 7, 11, 15], 9));

// console.log(twoSumAlternative([2, 7, 11, 15], 9));

// Task 2

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; // pointer for the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // place unique element
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates(nums));
