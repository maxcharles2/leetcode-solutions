// https://leetcode.com/problems/two-sum/description/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //we're taking in an array of nums called nums
    //also taking in the sum we're looking for called target
    //result is an array that matches the index of both nums
    //[4, 5, 6] & 10 => [0, 2]

    twoSum(nums, target) {

        let map = new Map();

        console.log(map)

        for(let i = 0; i < nums.length; i++){
            let difference = target - nums[i];

            if(map.has(difference)){
                return [map.get(difference), i];
            }
            
            map.set(nums[i], i)
        }

        // let i = 0;

        // //attempt at implementing two pointers/slow pointers
        // for(let j = 1; j < nums.length; j++){
        //     if(i === j){
        //         continue;
        //     }
            
        //     if(nums[i] + nums[j] === target){
        //         return [i, j]
        //     }

        //     j++

        //     if(nums[i] + nums[j] !== target){
        //         nums[i]++
        //     }
        // }
        // brute force
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = 0; j < nums.length; j++){
        //         //to not include indexes that match each other
        //         if(i === j){
        //             continue;
        //         }

        //         if(nums[i] + nums[j] === target){
        //             return [i, j];
        //         }
        //     }
        // }
    }
}
