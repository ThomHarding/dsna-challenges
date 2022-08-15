
function anagrams(wordOne, wordTwo) {
    const wordOneSorted = wordOne.split('').sort().join('');
    const wordTwoSorted = wordTwo.split('').sort().join('');
    return wordOneSorted === wordTwoSorted;
  }