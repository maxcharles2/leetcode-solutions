# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# we start off with the root of the binary tree
# we end with a number data type that represents the max depth
# root = [1,2,3,null,null,4] => 3
# implement DFS, traverse right and left side, add 1 and return the max

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # base case
        if not root:
            return 0

        # recursive case
        right = self.maxDepth(root.right)
        right += 1
        left = self.maxDepth(root.left)
        left += 1

        return max(right, left)
        