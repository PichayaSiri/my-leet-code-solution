export function reverse(x: number): number {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) return 0;
  let original = Math.abs(x);
  let result = 0;
  while (original > 0) {
    let num = original % 10;
    original = Math.floor(original / 10);
    result = result * 10 + num;
  }
  if (result > Math.pow(2, 31)) return 0;
  return x < 0 ? -result : result;
}
