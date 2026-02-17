// https://leetcode.com/problems/longest-repeating-character-replacement/description/

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    //starting off with a string of s
    //can choose up to k characters to replace
    //return a num that represents longest length of substring
    //substring must have only one distinct character
    //s = "XYYX", k = 2 => 4 (XXXX)
    //s = "AAABABB", k = 1 => 5 (AAAAA)
    //for loop to check string
    //use starting character as candidate for replacement
    //have a map check the most frequent characters
    characterReplacement(s, k) {
        let map = new Map()
        let left = 0;
        let maxCount = 0;
        let result = 0;
        
        for(let right = 0; right < s.length; right++){
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            maxCount = Math.max(maxCount, map.get(s[right]));

            while((right - left + 1) - maxCount > k){
                map.set(s[left], map.get(s[left]) - 1)
                left++
            }

            result = Math.max(result, right - left + 1)

        }
        return result;
    }
}
