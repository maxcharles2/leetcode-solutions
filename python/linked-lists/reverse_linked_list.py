# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# start off with a singly linked list head
# we want to return a new linked list in reverse
# [0,1,2,3] => [3,2,1,0]
# take a temp, prev and cur variable outside head
# head is equivalent to cur, prev set to null and temp is next
# have prev follow cur and cur follow temp, reassign pointer
# prev will be the new head

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        prev = None
        while cur != None:
            temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
            
        return prev