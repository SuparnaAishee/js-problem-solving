function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; 
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; 
      k++;
    }
  }

  return k;
}

// Example test cases
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1.slice(0, 2)); 
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2.slice(0, 5)); 