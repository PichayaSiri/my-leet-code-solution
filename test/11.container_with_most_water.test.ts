import { maxArea } from "@daily";

describe("11", () => {
  test.each([
    {
      height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
    },
    {
      height: [1, 1],
      expected: 1,
    },
  ])("maxArea($height) => $expected", ({ height, expected }) => {
    expect(maxArea(height)).toEqual(expected);
  });
});
