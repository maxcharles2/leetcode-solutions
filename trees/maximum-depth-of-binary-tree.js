// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) return 0; // Base case: empty tree

        // Recursively get depth of left and right subtrees
        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);

        // The depth of the tree = 1 (for root) + max of left and right depths
        return 1 + Math.max(leftDepth, rightDepth);
    }
}
