export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let arr = x.toString(10).split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
