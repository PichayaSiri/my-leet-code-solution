import { findMedianSortedArrays } from "@daily";

describe("4", () => {
  test.each([
    {
      nums1: [1, 3],
      nums2: [2],
      expected: 2,
    },
    {
      nums1: [1, 2],
      nums2: [3, 4],
      expected: 2.5,
    },
    {
      nums1: [],
      nums2: [1],
      expected: 1,
    },
  ])(
    "findMedianSortedArrays($nums1.$nums2) => $expected",
    ({ nums1, nums2, expected }) => {
      expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected);
    }
  );
});
