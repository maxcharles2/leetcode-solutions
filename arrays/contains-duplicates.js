// https://leetcode.com/problems/contains-duplicate/description/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    //starting off with an array of nums
    //returning a boolean as a result
    //if value returns more than once return true else false
    //[1, 2, 3, 3] => true, [1, 2, 3, 4] => false

    hasDuplicate(nums) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)

            if(map.get(nums[i]) > 1){
                return true;
            } 
        }

        return false;

        // let set = new Set()

        // for(let num of nums){
        //     if(set.has(num)){
        //         return true;
        //     }
        //     set.add(num)
        // }
        // return false;
    }
}
