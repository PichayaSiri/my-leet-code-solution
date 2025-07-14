import { reverse } from "@daily";

describe("7", () => {
  test.each([
    {
      input: 123,
      expected: 321,
    },
    {
      input: -123,
      expected: -321,
    },
    {
      input: 120,
      expected: 21,
    },
    {
      input: 1534236469,
      expected: 0,
    },
  ])("reverse($input) => $expected", ({ input, expected }) => {
    expect(reverse(input)).toEqual(expected);
  });
});
