function at(arr, index) {
    let positiveIndex = index;
    if (index < 0) {
      positiveIndex = arr.length + index;
    }
    return arr[positiveIndex];
  }
  