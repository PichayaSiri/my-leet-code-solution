import { fourSum } from "@daily";

describe("18", () => {
  test.each([
    {
      num: [1, 0, -1, 0, -2, 2],
      target: 0,
      expected: [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
    },
    {
      num: [2, 2, 2, 2, 2],
      target: 8,
      expected: [[2, 2, 2, 2]],
    },
    {
      num: [-3, -2, -1, 0, 0, 1, 2, 3],
      target: 0,
      expected: [
        [-3, -2, 2, 3],
        [-3, -1, 1, 3],
        [-3, 0, 0, 3],
        [-3, 0, 1, 2],
        [-2, -1, 0, 3],
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
    },
  ])("fourSum($num,$target) => $expected", ({ num, target, expected }) => {
    expect(fourSum(num, target)).toEqual(expected);
  });
});
