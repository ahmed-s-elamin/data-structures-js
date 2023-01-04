class Node {
  constructor(value) {
    this.value = value;
    this.next = this.next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node; //first node
    } else {
      //make new node pointing to head node
      node.next = this.head;
      //make new node the head
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      //find the last node
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      //last node points at new node
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head; //start from head
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `; //store
        curr = curr.next; //hop on to next node
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("list is empty? ", list.isEmpty());
console.log("list size is ", list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
list.append(40);
list.print();
