# take in a list of ints called prices
# we want to return an int that represents max profit
# [10,1,5,6,7,1] => 6
# [10,7,5,6,1,1]
# implementing sliding window, if i is less than j move forward
# each iteration subtract j from i to get current profit
# save max profit as a variable and return it at the end
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i = 0
        j = 1
        max_profit = 0
        while j < len(prices):
            current_profit = prices[j] - prices[i]
            
            if current_profit > max_profit:
                max_profit = current_profit
            if prices[j] < prices[i]:
                i = j

            j += 1
            
        return max_profit



