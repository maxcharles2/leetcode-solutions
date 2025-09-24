class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    //inputting an array of nums
    //get a nested subarray of combos
    //no duplicate triplets (i, j, k are all unique)
    //i + j + k = 0;
    //[-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
    //use set to prevent duplicates triplets
    //combo can have duplicates but not of the same nums
    threeSum(nums) {
        let sortedNums = nums.sort((a, b) => a - b)
        let result = []
        
        for (let i = 0; i < nums.length - 2; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while(left < right){
                let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

                if(sum === 0){
                    result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++
                    right--

                    while(left < right && nums[left] === nums[left - 1]) left++
                    while(left < right && nums[right] === nums[right + 1]) right--
                } else if (sum < 0){
                    left++
                } else {
                    right--
                }
                
            }

        }
        return result;
    }
}
