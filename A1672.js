/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    var richest = Number.MIN_SAFE_INTEGER;
    for(let indivPerson of accounts){
        current = 0;
        for(let indivAcc of indivPerson){
            current += indivAcc;
        }
        if(current > richest){
            richest = current;        
        }
    }
    return richest;
};