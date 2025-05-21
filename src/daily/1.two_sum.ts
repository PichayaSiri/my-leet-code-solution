export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (numMap.has(compliment)) {
      result.push(numMap.get(compliment) as number, i);
      break;
    }
    numMap.set(nums[i], i);
  }

  return result;
}
