// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let curr = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
            } else {
            curr.next = list2;
            list2 = list2.next;
            }
            curr = curr.next;
        }

        curr.next = list1 || list2;
        return dummy.next;
    }
}
