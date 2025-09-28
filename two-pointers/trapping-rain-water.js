// https://leetcode.com/problems/trapping-rain-water/description/

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    //taking in an array of nums called height
    //returning a num that The total amount of water that can be trapped after it rains.
    //[0,2,0,3,1,0,1,3,2,1] => 9
    //implement two pointers
    // leftMax – the tallest bar to the left of current position
    // rightMax – the tallest bar to the right
    // Water trapped at index i is: min(leftMax, rightMax) - height[i]

    trap(height) {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let water = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }

        return water;
    }
}
