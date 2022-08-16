function sayIt(words) {
    let sayString = words;
    //4-6 is just in case the initial string is empty
    if (words === undefined) {
        return sayString;
    }
    function result(word) {
        if (word === undefined) {
            return sayString;
        }
        if (sayString !== '') {
            sayString += ' ';
        }
        sayString += word;
        return result;
    }
    return result;
}

const result = sayIt('hello')('my')('name')('is')('JavaScript')();
// const result1 = sayIt('hello')
// const result2 = result1('my');
// const result3 = result2('name');
// const result4 = result3('is')
// const result5 = result4('JavaScript')
// const result = result5();

console.log(result);