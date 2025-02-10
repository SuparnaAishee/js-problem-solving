function threeSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicate elements
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++; 
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
console.log(threeSum([0, 1, 1])); 
console.log(threeSum([0, 0, 0])); 
