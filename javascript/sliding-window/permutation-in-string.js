// https://leetcode.com/problems/permutation-in-string/description/

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    //start of with two strings s1 and s2
    //we want a boolean as a result
    //if the characters in s1 appear in s2 return true
    //s1 = "abc", s2 = "lecabee" => true
    //loop through string
    //two pointers where fixed window size equals part of s2 
    //if its a permutation return true else exit and return false
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }

        let count1 = Array(26).fill(0);
        let count2 = Array(26).fill(0);

        for(let i = 0; i < s1.length; i++){
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }
        
        const matches = (a, b) => a.every((val, idx) => val === b[idx]);

        if(matches(count1, count2)){
            return true;
        }

        for(let i = s1.length; i < s2.length; i++){
            count2[s2.charCodeAt(i) - 97]++
            count2[s2.charCodeAt(i - s1.length) - 97]--

            if(matches(count1, count2)){
                return true;
            }
        }

        return false; //went through entire string but no match
    }
}
