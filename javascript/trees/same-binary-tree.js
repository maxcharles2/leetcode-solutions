// https://leetcode.com/problems/same-tree/description/

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // If both are null → trees are identical here
        if (p === null && q === null) return true;

        // If one is null and the other isn't → different structure
        if (p === null || q === null) return false;

        // If current values differ → not the same tree
        if (p.val !== q.val) return false;

        // Recursively check left and right subtrees
        return (
            this.isSameTree(p.left, q.left) &&
            this.isSameTree(p.right, q.right)
        );
    }
}
