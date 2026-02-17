// https://leetcode.com/problems/minimum-window-substring/description/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    //starting of with a regular string s
    //also a string checker t
    //returning t if the characters appear in the substring
    //empty string if it doesn't have it all
    minWindow(s, t) {
        if(t.length > s.length) return "";

        let need = new Map();
        for(let char of t){
            need.set(char, (need.get(char) || 0) + 1)
        }

        let have = 0;
        let required = need.size
        let left = 0;
        let minLength = Infinity
        let minStart = 0;
        const window = new Map();

        for(let right = 0; right < s.length; right++){
            const c = s[right];
            window.set(c, (window.get(c) || 0) + 1)

            if(need.has(c) && window.get(c) === need.get(c)){
                have++
            }

            while(have === required){
                if(right - left + 1 < minLength){
                    minLength = right - left + 1;
                    minStart = left;
                }

                const leftChar = s[left];

                window.set(leftChar, window.get(leftChar) - 1);
                
                if(need.has(leftChar) && window.get(leftChar) < need.get(leftChar)){
                    have--;
                }

                left++;
            }
        }

        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
