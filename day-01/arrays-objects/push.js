
function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

const testArr = ['a', 'b', 'c'];
console.log(push(testArr, 'd'));