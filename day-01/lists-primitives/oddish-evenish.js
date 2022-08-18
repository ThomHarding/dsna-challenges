
function oddishOrEvenish(number) {
    let digits = number.toString().split('');
    let sum = 0;
    for (let digit of digits) {
      sum = sum += Number(digit);
    }
    if (sum % 2 !== 0) {
      return 'Oddish';
    } else {
      return 'Evenish';
    }
  }