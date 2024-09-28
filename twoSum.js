// Two Sum 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function checkTwoSum(nums,target){
    let left=0;
    let right=1;
  while(left<right){
        if(right>nums.length-1){
            left++
            right=left+1
        }
        if(nums[left]+nums[right]===target){
            return[left,right]
        }else{
            right++
        }
    }
}
console.log(checkTwoSum([3,2,4],6))