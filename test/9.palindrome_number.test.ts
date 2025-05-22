import { isPalindrome } from "@daily";

describe("9", () => {
  test.each([
    {
      input: 121,
      expected: true,
    },
    {
      input: -121,
      expected: false,
    },
    {
      input: 10,
      expected: false,
    },
  ])("isPalindrome($input) => $expected", ({ input, expected }) => {
    expect(isPalindrome(input)).toEqual(expected);
  });
});
