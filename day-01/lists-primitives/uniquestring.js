
function uniqueString(strings) {
    let seenStrings = {};
    for (let i = 0; i < strings.length; i++) {
        let letters = strings[i].split('');
        const unique = [...new Set(letters)];
        for (let letter of unique) {
            if (!seenStrings[letter]) {
                seenStrings[letter] = 1;
            } else {
                seenStrings[letter]++;
            }
        }
    }
    for (let i = 0; i < strings.length; i++) {
        let letters = strings[i].split('');
        for (let letter of letters) {
            if (seenStrings[letter] === 1) {
                return strings[i];
            }
        }
    }
}
