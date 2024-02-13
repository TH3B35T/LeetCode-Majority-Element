/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // nums.sort((a,b) => a-b)
    // return nums[Math.floor(nums.length / 2)]

    // Using Boyer-Moore Voting Algorithm. This algorithm has a linear time complexity of O(n) and constant space complexity of O(1),
    let count = 0;
    let candidate = null;

    for(let num of nums) {
        if(count === 0){
            candidate = num;
        }
        count += (candidate === num)? 1:-1;
    }
    return candidate;
};
