function fizzBuzz(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0) {
        if (i % 5 === 0) {
          arr[i - 1] = 'FizzBuzz';
        } else {
          arr[i - 1] = 'Fizz';
        }
      } else if (i % 5 === 0) {
        arr[i - 1] = 'Buzz';
      } else {
        arr[i - 1] = i;
      }
    }
    return arr;
  }
  gi