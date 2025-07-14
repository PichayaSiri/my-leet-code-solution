import { mergeKLists, toArray, toList } from "@daily";

describe("23", () => {
  test.each([
    {
      lists: [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
      expected: [1, 1, 2, 3, 4, 4, 5, 6],
    },
    {
      lists: [],
      expected: [],
    },
    {
      lists: [[]],
      expected: [],
    },
    {
      lists: [[1], [0]],
      expected: [0, 1],
    },
    {
      lists: [[0], [1]],
      expected: [0, 1],
    },
  ])("mergeKLists($lists) => $expected", ({ lists, expected }) => {
    const tmp = lists.map((item) => toList(item));
    const res = toArray(mergeKLists(tmp));
    // console.log(res);
    expect(res).toEqual(expected);
  });
});
