import { longestCommonPrefix } from "@daily";

describe("14", () => {
  test.each([
    {
      strs: ["flower", "flow", "flight"],
      expected: "fl",
    },
    {
      strs: ["dog", "racecar", "car"],
      expected: "",
    },
  ])("longestCommonPrefix($strs) => $expected", ({ strs, expected }) => {
    expect(longestCommonPrefix(strs)).toEqual(expected);
  });
});
