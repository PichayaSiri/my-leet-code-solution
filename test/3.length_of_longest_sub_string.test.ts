import { lengthOfLongestSubstring } from "@daily";
describe("3", () => {
  test.each([
    {
      input: "abcabcbb",
      output: 3,
    },
    {
      input: "bbbbb",
      output: 1,
    },
    {
      input: "pwwkew",
      output: 3,
    },
  ])("lengthOfLongestSubstring($input) => $output", ({ input, output }) => {
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
});
