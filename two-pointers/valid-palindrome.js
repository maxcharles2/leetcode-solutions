// https://leetcode.com/problems/valid-palindrome/description/


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    //taking in a string as an input
    //returning boolean as a result
    //"tab a cat" => false
    //as long as it can reverse and be the same true
    //if not then false
    //two pointers to the center and fail if doesn't match
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let i = 0
        let j = cleaned.length - 1;

        while (i < j){

            if(cleaned[i] !== cleaned[j]){
                return false;
            }

            i++
            j--
        }

        return true;
    }
}
