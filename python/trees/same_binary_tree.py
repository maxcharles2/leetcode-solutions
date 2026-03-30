# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# we start off with two different roots called p and q
# we return a boolean as a result depend on if they're the same or not
# p = [1,2,3], q = [1,2,3] => true
# base case: handle no nodes
# recursive case: use recursive DFS to traverse nodes, add to a list
# result list 1 will be iterated on to set a dictionary to compare result list 2 (key/index, value/value)
# if the value at a given index for result 2 doesnt match the dictionary for result 1 return false

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # base case
        # both have no nodes
        if not p and not q:
            return True

        # if either one has no nodes but the other one does
        if not p or not q:
            return False

        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)