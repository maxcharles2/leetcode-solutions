// https://leetcode.com/problems/container-with-most-water/description/

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    //we have an array of numbers to start
    //end with a number
    //2nd highest is the constraint
    //find the widest sides and then multiply by constraint
    //this gets the highest amount of water held as a result
    maxArea(heights) {
        //ht = height
        let i = 0
        let j = heights.length - 1
        let maxArea = 0

        while(i < j){
            let width = j - i;
            let height = Math.min(heights[i], heights[j])
            let area = width * height;
            maxArea = Math.max(maxArea, area)

            if(heights[i] < heights[j]){
                i++
            } else {
                j--
            }
        }

        return maxArea;
    }
}
