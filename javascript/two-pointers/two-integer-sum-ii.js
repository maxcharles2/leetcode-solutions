// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/



class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    //inputting an array of numbers called numbers
    //also taking in a num called target
    //outputting an array of nums that sum to the target
    //solution must be O(1) space
    //array is sorted in non decreasing order
    //numbers = [1,2,3,4], target = 3 => [1, 2]
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1

        while (left < right){
            let sum = numbers[left] + numbers[right];

            if(sum === target){
                return [left + 1, right + 1];
            } else if (sum < target){
                left++
            } else {
                right--
            }
        }
    }
}
