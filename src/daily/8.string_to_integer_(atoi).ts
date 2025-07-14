export function myAtoi(s: string): number {
  let result = parseInt(s) || 0;
  if (result >= Math.pow(2, 31)) result = Math.pow(2, 31) - 1;
  else if (result <= Math.pow(-2, 31)) result = Math.pow(-2, 31);
  return result;
}
