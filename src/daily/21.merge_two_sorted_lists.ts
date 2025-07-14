export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let sorting = new ListNode(0, null);
  let dummySort = sorting;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      dummySort.next = list1;
      list1 = list1.next;
    } else {
      dummySort.next = list2;
      list2 = list2.next;
    }
    dummySort = dummySort.next!;
  }
  dummySort.next = list1 !== null ? list1 : list2;
  return sorting.next;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function toList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

export function toArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}
