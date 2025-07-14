import { isMatch } from "@daily";

describe("10", () => {
  test.each([
    {
      s: "aa",
      p: "a",
      expected: false,
    },
    {
      s: "aa",
      p: "a*",
      expected: true,
    },
    {
      s: "ab",
      p: ".*",
      expected: true,
    },
  ])("isMatch($s,$p) => $expected", ({ s, p, expected }) => {
    expect(isMatch(s, p)).toEqual(expected);
  });
});
