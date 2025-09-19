https://leetcode.com/problems/top-k-frequent-elements/description/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    //start off with arr of nums and int called k
    //ending with an array of nums as a result
    //return the k elements with the highest frequencies
    //if k is 3 show the top 3 elements in frequency in nums
    //internally sort by frequency to find the top k
    //however the final returned order doesn’t matter
    //nums = [1,2,2,3,3,3], k = 2 => [2, 3]
    //check frequency in a map object, sort by descending order
    //return the highest values in map

    topKFrequent(nums, k) {
       let map = new Map();

       for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1);
       }

       return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0])
    }
}
