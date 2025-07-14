export function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];
  const newArray = nums.sort((a, b) => a - b);
  for (let first = 0; first < newArray.length - 2; first++) {
    let second = first + 1;
    let thirst = newArray.length - 1;
    if (first > 0 && newArray[first] === newArray[first - 1]) continue;
    while (second < thirst) {
      const sum = newArray[second] + newArray[thirst] + newArray[first];
      if (0 === sum) {
        const arr = [newArray[first], newArray[second], newArray[thirst]];
        result.push(arr);
        second++;
        thirst--;
      }
      if (sum < 0) {
        second++;
      } else if (sum > 0) {
        thirst--;
      }
      while (
        newArray[second] === newArray[second - 1] &&
        second !== first + 1
      ) {
        second++;
      }
      while (newArray[thirst] === newArray[thirst + 1]) {
        thirst--;
      }
    }
  }
  return result;
}
