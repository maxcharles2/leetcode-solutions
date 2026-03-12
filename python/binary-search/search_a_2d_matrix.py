# start off with a 2d int array called matrix
# we have another num called target that we want to find
# matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15 => false
# matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 13 => true
# use the first number of index as a guide
# if matrix[i][0] > target => left mid + 1
# if matrix[i][0] < target => right mid - 1
# if left and right index are same, do binary/linear search
# if num in the list return true else return false
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        for row in matrix:
            for element in row:
                if element == target:
                    return True
        return False 