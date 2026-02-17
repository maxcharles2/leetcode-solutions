// https://leetcode.com/problems/encode-and-decode-strings/description/
//check on neetcode

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    //start off with an arr of strings calls strs
    //encode (list of strings to single string)
    //decode (single string to list of strings)
    //finish out with the same arr of strings
    //["we","say",":","yes"] => ["we","say",":","yes"]
    encode(strs) {
        let result = ""

        for(let s of strs){
            result += s.length + "#" + s;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
         

        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++
            }
            
            let length = parseInt(str.substring(i, j));
            let word = str.substring(j + 1, j + 1 + length);
            result.push(word);
            i = j + 1 + length;
        }

        return result;
    }
}
