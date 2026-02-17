// https://leetcode.com/problems/group-anagrams/description/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    //we start with an arr of strings called strs
    //finish with an array with nested subarrays of strings
    //["act","pots","tops","cat","stop","hat"]
    //[["hat"],["act", "cat"],["stop", "pots", "tops"]]
    //create a map, sort it and group the arrays
    groupAnagrams(strs) {
        

        let map = new Map();

        for (let str of strs){
            let key = str.split("").sort().join("")

            if(!map.has(key)){
                map.set(key, [])
            }
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}