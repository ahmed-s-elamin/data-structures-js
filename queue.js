class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  getSize() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log("Queue is empty:" + queue.isEmpty());
console.log("Queue siez: " + queue.getSize());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("first in queue: " + queue.peek());
console.log("Queue is empty:" + queue.isEmpty());

queue.enqueue(40);
queue.print();
console.log("Queue size: " + queue.getSize());
queue.print();
