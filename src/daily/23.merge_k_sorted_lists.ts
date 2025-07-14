import { ListNode, toArray } from "@daily";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let newLists: ListNode | null = new ListNode(0, null);
  if (lists.length === 0) return newLists.next;
  const priorityQueue = (list1: ListNode | null, list2: ListNode | null) => {
    let sortList: ListNode | null = new ListNode(0, null);
    let dummy = sortList;
    if (list1?.val === null) {
      dummy.next = list2;
    } else {
      while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
          dummy.next = list1;
          list1 = list1.next;
        } else {
          dummy.next = list2;
          list2 = list2.next;
        }
        dummy = dummy.next;
      }
      dummy.next = list2 !== null ? list2 : list1;
    }
		// console.log(toArray(sortList));
    return sortList;
  };
  for (let i = 0; i < lists.length; i++) {
    newLists = priorityQueue(newLists.next, lists[i]);
  }
  return newLists.next;
}
