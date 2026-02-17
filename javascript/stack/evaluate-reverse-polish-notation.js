// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    //starting with arr of strs called tokens
    //end with a number as a result
    //operators exist in the string to perform operations
    //translate reverse polish notation to Math we can operatate on
    //iterate and convert strings to nums
    //create logic to recognize operators to do math on converted nums
    evalRPN(tokens) {
        let stack = [];

        for(let token of tokens){
            if(!isNaN(token)){
                stack.push(Number(token))
            } else {
                const b = stack.pop();
                const a = stack.pop();

                switch (token) {
                    case '+':
                        stack.push(a + b);
                        break
                    case '-':
                        stack.push(a - b);
                        break
                    case '*':
                        stack.push(a * b);
                        break
                    case '/':
                        stack.push(Math.trunc(a / b))
                        break
                }
            }
        }
        return stack.pop()
    }
}
