// Linear Search

function linearSearch(nums, key) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      return i;
    }
  }
  return -1;
}

const nums = [2, 4, 6, 8, 10];
const key = 8;

const result = linearSearch(nums, key);
if (result > 0) {
  console.log(`Key found at index ${result}`);
} else {
  console.log(`Key not found`);
}
