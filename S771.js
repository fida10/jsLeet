/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var jewelsCount = 0;
    
    for (var stone of stones){
        for(var jewel of jewels){
            if(jewel == stone){
                jewelsCount += 1;
            }
        }
    }
    
    return jewelsCount;
};