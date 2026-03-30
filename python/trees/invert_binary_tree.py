# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# start off with the root
# we want to end with the root but inverted
# base case and recursive case
# implement BFS, traverse the right side, then the left side


class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # base case
        if not root:
            return None

        # recursive case
        root.left, root.right = root.right, root.left

        self.invertTree(root.right)
        self.invertTree(root.left)

        return root