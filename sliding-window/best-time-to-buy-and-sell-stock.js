// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 0;
        let maxProfit = 0;

        while(right < prices.length){
            if(prices[right] > prices[left]){
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right++
        }
        return maxProfit;
    }
}
