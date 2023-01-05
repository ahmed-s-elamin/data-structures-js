//usage track steps like browser history or undo typing..etc

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.isEmpty());
console.log("size is:" + stack.getSize());
stack.print();
console.log("top is: " + stack.peek());
console.log("deleted: " + stack.pop());
console.log("top is: " + stack.peek());
console.log("size is: " + stack.getSize());
stack.print();
