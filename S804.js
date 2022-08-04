/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var uniqueMorseCodes = new Set();
    for(let word of words){
        morseWord = "";
        for(let indivChar of word){
            morseWord += morseCode[indivChar.charCodeAt(0) - 97];
        }
        uniqueMorseCodes.add(morseWord);
    }

    return uniqueMorseCodes.size;
};