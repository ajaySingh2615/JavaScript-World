// largest number

function largestNumber(nums) {
  let largest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    }
  }

  return largest;
}

let nums = [1, 2, 6, 3, 5];
console.log(largestNumber(nums));
