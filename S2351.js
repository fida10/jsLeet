/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    var leastSecondIndex = s.length;
    
    for(var i = 0; i < s.length; i++){
        var currentChar = s[i];
        var indexOfRepeat = s.length;
        for(var j = i + 1; j < s.length; j++){
            if(currentChar == s[j]){
                indexOfRepeat = j;
                break;    
            }
        }
        if(indexOfRepeat < leastSecondIndex){
            leastSecondIndex = indexOfRepeat;
        }
    }
    return s[leastSecondIndex];
};