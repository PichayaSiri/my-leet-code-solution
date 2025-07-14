import { threeSumClosest } from "@daily";

describe("16", () => {
  test.each([
    {
      nums: [-1, 2, 1, -4],
      target: 1,
      expected: 2,
    },
    {
      nums: [0, 0, 0],
      target: 1,
      expected: 0,
    },
    {
      nums: [-1000, -5, -5, -5, -5, -5, -5, -1, -1, -1],
      target: -14,
      expected: -15,
    },
  ])(
    "threeSumClosest($nums,$target) => expected",
    ({ nums, target, expected }) => {
      expect(threeSumClosest(nums, target)).toEqual(expected);
    }
  );
});
