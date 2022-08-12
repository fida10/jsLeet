/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    
    var newArr = Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        newArr[i] = nums[nums[i]];
    }
    
    return newArr;
};