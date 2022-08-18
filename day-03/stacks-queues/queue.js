class Queue {
    constructor() {
      this.items = [];
      this.head = 0;
      this.tail = 0;
      //this is a weird way of doing a queue i found online that seems neat
      //basically just keep track of where the queue starts and ends
      //move end up when you add one, move start up when you delete one
      //instead of replacing anything, just stop looking at old items
    }
  
    enqueue(item) {
      this.items[this.tail] = item;
      this.tail++;
    }

    dequeue() {
        const temp = this.items[this.head];
        this.head++;
        return temp;
    }

    hasNext() {
      return (this.items.length !== 0);
    }

    length() {
        return this.tail - this.head;
    }
  }
  
// const queue = new Queue();
// queue.enqueue('fox');
// queue.enqueue('goose');
// queue.enqueue('lizard');
// console.log(queue.dequeue()); // 'fox'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'goose'
// queue.enqueue('llama');
// console.log(queue.dequeue()); // 'lizard'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'llama'
// console.log(queue.hasNext()); // false
// console.log(queue.dequeue()); // null