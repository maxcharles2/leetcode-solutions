// https://leetcode.com/problems/search-a-2d-matrix/description/

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;
  
        const m = matrix.length;
        const n = matrix[0].length;
        let left = 0;
        let right = m * n - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / n);
            const col = mid % n;
            const midVal = matrix[row][col];
            
            if (midVal === target) {
            return true;
            } else if (midVal < target) {
            left = mid + 1;
            } else {
            right = mid - 1;
            }
        }
        
        return false;
    }
}
