function unshift(arr, item) {
    for(let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i + 1] = temp;
    }
    arr[0] = item;
    return arr.length;
}

unshift(['a', 'b', 'c'], 'd');