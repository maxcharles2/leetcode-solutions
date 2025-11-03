// https://leetcode.com/problems/invert-binary-tree/description/

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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) return null;  // Base case: empty tree

        // Swap left and right children
        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        // Recurse for left and right subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
