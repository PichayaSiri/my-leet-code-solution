export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length <= 3) return nums.reduce((a, b) => a + b);
  const tmp = nums.sort((a, b) => a - b);
  let closet = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < tmp.length; i++) {
    let left = i + 1;
    let right = tmp.length - 1;
    while (left < right) {
      const sum = tmp[i] + tmp[left] + tmp[right];
      if (Math.abs(sum - target) < Math.abs(closet - target)) {
        closet = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closet;
}
