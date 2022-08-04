/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    const newSentence = new Set();

    for(let indivChar of sentence){
        newSentence.add(indivChar);
    }

    return newSentence.size == 26
};