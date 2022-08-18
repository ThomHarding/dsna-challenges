class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
      return this.items[this.items.length-1];
    }


  }
  
function reverseArray(arr) {
    const reversedArr = new Stack();
    while (arr.length > 0) {
        reversedArr.push(arr.pop());
    }
    return reversedArr;
}

// console.log(reverseArray([12, 3, 5, 7]));
//7, 5, 3, 12