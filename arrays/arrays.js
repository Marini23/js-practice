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

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// const removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;

//   let k = 1; // pointer for the position of the next unique element

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i]; // place unique element
//       k++;
//     }
//   }

//   return k;
// };

// console.log(removeDuplicates(nums));

// Task 03

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// const nums = [3, 2, 2, 3];

// const val = 3;

// const removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;
// };

// console.log(removeElement(nums, val));

// Task 03

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  console.log("Start:", { nums, target });
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(
      `loop → left: ${left}, right: ${right}, mid: ${mid}, nums[mid]: ${nums[mid]}`
    );

    if (nums[mid] === target) {
      console.log("Found at index", mid);
      return mid;
    }

    if (nums[mid] < target) {
      console.log(`nums[mid] < target → move left to ${mid + 1}`);
      left = mid + 1;
    } else {
      console.log(`nums[mid] > target → move right to ${mid - 1}`);
      right = mid - 1;
    }
  }

  console.log("Not found. Insert position is", left);
  return left;
};

console.log(searchInsert([2, 4, 7, 10, 14, 18], 6));
