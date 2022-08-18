function equalSides(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        rightSum+= numbers[i];
        //probably an easier way to do this using reduce
    }
    for (let i = 0; i < numbers.length; i++) {
        rightSum -= numbers[i];
        if (leftSum === rightSum) {
            return i;
        }
        if (leftSum >= rightSum) {
            return -1;
        }
        leftSum += numbers[i];
    }
}

console.log(equalSides([1,2,3,4,3,2,1]));