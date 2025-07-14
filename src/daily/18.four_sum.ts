export function fourSum(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[left] + nums[right] + nums[i] + nums[j];
        if (sum === target) {
          if (
            !result.some((value) => {
              return (
                value[0] === nums[i] &&
                value[1] === nums[j] &&
                value[2] === nums[left] &&
                value[3] === nums[right]
              );
            })
          ) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
          }
          left++;
          right--;
        }
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        }
        while (nums[left] === nums[left - 1] && left !== j + 1) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
}
