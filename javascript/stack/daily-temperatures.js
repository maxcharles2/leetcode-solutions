// https://leetcode.com/problems/daily-temperatures/description/

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let result = Array(n).fill(0);
        let stack = [];

        for(let i = 0; i < n; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                const prevIndex = stack.pop()
                result[prevIndex] = i - prevIndex
            }
            stack.push(i)
        }

        return result;
    }
}
