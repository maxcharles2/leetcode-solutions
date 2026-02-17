// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    //start off with a string
    //return a number data type (int)
    //zxyzxyz => 3
    //loop through string, add to a hashmap to prevent duplicates
    //end loop and return current index + 1
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let left = 0;
        let maxLength = 0;

        for(let right = 0; right < s.length; right++){
            let char = s[right];

            if(map.has(char) && map.get(char) >= left){
                left = map.get(char) + 1
            }

            map.set(char, right);
            
            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength;
    }
}
