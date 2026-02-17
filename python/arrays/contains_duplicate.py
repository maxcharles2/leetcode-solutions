# we start off with a list of nums called nums
# we want to return a boolean
# if it appears more than once than hit than return false
# [1, 2, 2, 3] = true, => [2, 3, 4, 5] => false
# iterate through a list, use a set to track values, return boolean based on the condition
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        new_set = set()
        # adding values to set
        for num in nums:
            if num in new_set:
                return True
                
            if num not in new_set:
                new_set.add(num)

        
        return False

        # new_dict = {}

        # for i in range(len(nums)):
        #     new_dict[i] = nums[i]

        # for key, value in new_dict.items():
        #     if value in nums:
        #         return True