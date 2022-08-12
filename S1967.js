/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    var counter = 0;
    
    for(var pattern of patterns){
        if(word.includes(pattern)){
            counter++;
        }   
    }
    return counter;
};