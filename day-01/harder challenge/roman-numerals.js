function convert(roman) {
    let returnInt = 0;
    let romanMap = {
        //these are the only possible combinations of roman numerals
        //you would have to add together
        //every other number is made up of these subnumerals
        'I':1,
        'IV':4,
        'V':5,
        'IX':9,
        'X':10,
        'XL':40,
        'L':50,
        'XC':90,
        'C':100,
        'CD':400,
        'D':500,
        'CM':900,
        'M': 1000
    }
    for (i = 0; i < roman.length; i++) {
        let thisChar = roman[i];
        //two cases: either we have a letter less than the one after it
        //in which case we add them together and use the two letter combo
        //or it isn't less and we just add it to the total and move on
        if ((i + 1) == roman.length) {
            //if it's the last character we know it's not modified
            returnInt += romanMap[roman[i]];
        } else {
            thisValue = romanMap[thisChar];
            nextValue = romanMap[roman[i+1]]
            if (thisValue < nextValue) {
                returnInt += romanMap[roman[i] + '' + roman[i+1]];
                i++;
            } else {
                returnInt += (romanMap[roman[i]]);
            }
        }
        
    }
    console.log('donezo', returnInt);
    return returnInt;
}

console.log(convert('III'));
console.log(convert('XIX'));
console.log(convert('MCXIV'));
console.log(convert('MMCMXCIII'));