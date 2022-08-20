/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    
    for (var word of words){
        if(word.split("").reverse().join("") === word){
            return word;
        }
    }
    
    return "";
};