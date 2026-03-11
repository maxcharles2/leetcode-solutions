# starting out with a list of nums and nums
# also have a num called target
# we want to find the index of the target and return index
# nums = [-1,0,2,4,6,8], target = 4 => 3
# adjust pointers based on the status between mid & target
# implement binary search return index of target or -1
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                return mid
        return -1