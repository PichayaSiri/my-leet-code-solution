import { longestPalindrome } from "@daily";

describe("5", () => {
  test.each([
    {
      input: "babab",
      expected: "bab",
    },
    {
      input: "cbbd",
      expected: "bb",
    },
  ])("longestPalindrome($input) => $expected", ({ input, expected }) => {
    expect(longestPalindrome(input)).toEqual(expected);
  });
});
