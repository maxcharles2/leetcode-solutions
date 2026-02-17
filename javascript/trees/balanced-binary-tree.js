// https://leetcode.com/problems/balanced-binary-tree/description/

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
     * @return {boolean}
     */
    isBalanced(root) {
        // Returns height of subtree if balanced, or -1 if unbalanced
        const checkHeight = (node) => {
            if (node === null) return 0;

            const leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1; // Left subtree unbalanced

            const rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1; // Right subtree unbalanced

            // If height difference > 1 → unbalanced
            if (Math.abs(leftHeight - rightHeight) > 1) return -1;

            // Otherwise, return height
            return 1 + Math.max(leftHeight, rightHeight);
        };

        return checkHeight(root) !== -1;
    }
}
