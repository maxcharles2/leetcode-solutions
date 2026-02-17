# we start off with an list of numbers called nums and a number called target
# target represents the target sum of two numbers in the nums list
# we want to return a list that contains the indexes of the numbers that we found
# loop through list, nested loop check to see if they add up to the sum, push index to list and return

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = []

        for i in range(len(nums)):
            for j in range(len(nums)):
                if nums[i] + nums[j] == target and i != j:
                    result.append(i)
                    
        return result