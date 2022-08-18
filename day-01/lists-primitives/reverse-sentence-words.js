function reverseWords(sentence) {
    let words = sentence.split(' ');
    //get an array of each word
    for (let i = 0; i < words.length; i++) {
      //look at each word
      const letters = words[i].split('');
      //get an array of each letter in the word
      let newWord = '';
      //look at each word backwards and concatenate the letters on a new string
      for (let i = letters.length - 1; i >= 0; i--) {
        //nested loops which is probably bad
        //but you only go over each letter once? is it still O(n)?
        newWord = newWord.concat(letters[i]);
      }
      words[i] = newWord;
      //put new backwards word back into the array of words
    }
    words = words.join(' ');
    //make words back into one string
    return words;
  }