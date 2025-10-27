// https://leetcode.com/problems/binary-search/description/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    //start off with an arr of nums called numms
    //also have a target num value to search target
    //end with a num as a result (-1 if not found or index if found)
    //nums = [-1,0,2,4,6,8], target = 4 => 3
    //implement binary search to find target
    search(nums, target) {
        let L = 0, R = nums.length - 1;

        // let mid = Math.floor((L + R) / 2);

        while(L <= R){
            let mid = Math.floor((L + R) / 2);
            
            if(target > nums[mid]){
                L = mid + 1
            } else if (target < nums[mid]){
                R = mid - 1
            } else {
                return mid;
            }
        }
        return -1;
    }
}