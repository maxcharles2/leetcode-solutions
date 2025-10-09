// https://leetcode.com/problems/valid-parentheses/description/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])

        for(let char of s){
            if(map.has(char)){
                const top = stack.pop()
                if(top !== map.get(char)) return false
            } else {
                stack.push(char)
            }
        }

        return stack.length === 0;
    }
}
