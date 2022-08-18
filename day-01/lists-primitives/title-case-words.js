function titleCaseWords(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    let words = lowerCaseSentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      const letters = word.split('');
      letters[0] = letters[0].toUpperCase();
      word = letters.join('');
      words[i] = word;
    }
    const newSentence = words.join(' ');
    return newSentence;
  }