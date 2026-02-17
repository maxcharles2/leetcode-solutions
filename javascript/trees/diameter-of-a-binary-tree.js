// https://leetcode.com/problems/diameter-of-binary-tree/description/

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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        // Helper function to compute depth recursively
        const depth = (node) => {
            if (node === null) return 0;

            // Compute left and right subtree depths
            const leftDepth = depth(node.left);
            const rightDepth = depth(node.right);

            // Update maximum diameter: number of edges in longest path
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            // Return depth of current subtree
            return 1 + Math.max(leftDepth, rightDepth);
        };

        depth(root);
        return maxDiameter;
    }
}
