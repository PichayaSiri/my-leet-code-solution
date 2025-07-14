class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let dummy = head;
  let count = 1;
  let list: ListNode | null = new ListNode(0, null);
  while (dummy?.next) {
    dummy = dummy.next;
    count++;
  }
  dummy = new ListNode(0, null);
  dummy.next = head;
  let listDummy: ListNode | null = list;
  while (count >= 1) {
    if (count === n) {
      dummy = dummy?.next ?? null;
      if (count === n) {
        if (listDummy) {
          listDummy.next = dummy?.next ?? null;
        }
      }
      count--;
    } else {
      if (listDummy) {
        listDummy.next = dummy?.next ?? null;
        listDummy = listDummy.next;
        dummy = dummy?.next ?? null;
      }
      count--;
    }
  }
  return list.next;
}
