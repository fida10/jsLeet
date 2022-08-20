/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    var returnString = "";
    for(var i = s.length - 1; i > -1; i--){
        if(s[i] == '#'){
            returnString += String.fromCharCode(96 + parseInt(s[i - 2] + s[i - 1]));
            i -= 2;
        } else {
            returnString += String.fromCharCode(96 + parseInt(s[i]));
        }
    }
    
    return returnString.split("").reverse().join("");
};