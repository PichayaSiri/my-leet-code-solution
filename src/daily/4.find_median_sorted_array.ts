export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const arr: number[] = nums1.concat(nums2).sort((a, b) => a - b);
  const length = arr.length;
  if (arr.length == 1) return arr[0];
  if (length % 2 !== 0) {
    return arr[Math.floor(length / 2)];
  } else {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2;
  }
}
