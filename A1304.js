/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
  
    var ans = [];
    subtract = 0;

    while(ans.length < n - 1){
        var numToAppend = n - subtract;
        ans.push(numToAppend);
        ans.push(numToAppend * - 1);

        subtract += 1;
    }

    if(n % 2 != 0){
        ans.push(0);
    }

    return ans;
};