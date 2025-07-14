import { swapPairs, toArray, toList } from "@daily";

describe("24", () => {
  test.each([
    {
      head: [1, 2, 3, 4],
      expected: [2, 1, 4, 3],
    },
    {
      head: [],
      expected: [],
    },
    {
      head: [1],
      expected: [1],
    },
    {
      head: [1, 2, 3],
      expected: [2, 1, 3],
    },
  ])(`swapPairs($head) => $expected`, ({ head, expected }) => {
    const res = toArray(swapPairs(toList(head)));
    console.log(res);
    expect(res).toEqual(expected);
  });
});
