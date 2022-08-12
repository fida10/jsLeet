/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    nums.sort();
    
    var low = nums[0];
    var high = nums[0];
    
    for(let indivNum of nums){
        if(indivNum > high){
            high = indivNum;
        }
        if(indivNum < low){
            low = indivNum;
        }
    }
    
    gcd = 0;
    
    for(var i = 0; i < low + 1; i++){
        if(low % i == 0 && high % i == 0){
            gcd = i;
        }
    }
    
    return gcd;
};