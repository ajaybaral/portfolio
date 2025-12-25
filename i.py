from collections import defaultdict
class Solution(object):
    def maximumUniqueSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        left=0
        d=defaultdict(int)
        maxx=0
        l=[]
        for right in range(len(nums)):
            if d[nums[right]] in d:
                left=d[right]+1
            l=nums[left:right]
            maxx=max(sum(l),maxx)
            d[nums[right]]=right
        return maxx

       
        
        

# ✅ Run example
if __name__ == "__main__":
    nums = [4, 2, 4, 5, 6]
    sol = Solution()
    print("Maximum unique subarray sum:", sol.maximumUniqueSubarray(nums))
