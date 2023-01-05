//linked lists pros include : constant time insertion / deletion
//

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
      //point new node to head
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
        prev = prev.next; //hop to next node
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

  addAt(index, value) {
    //invalid index
    if (index < 0 || index > this.getSize) {
      return console.log("invalid index");
    } //adding at to the beginning
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        //advance till reaching the node before the index
        prev = prev.next;
      }
      //connecting new node to other nodes
      node.next = prev.next; //jus between 2 nodes
      prev.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    //invalid index
    if (index < 0 || index > this.size) {
      return null;
    }
    //removing first index
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next; //making next node the head
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        //advance till reaching the node before the index
        prev = prev.next;
      }
      //detaching removed node from the list
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  remove(value) {
    //value invalid
    if (this.isEmpty()) {
      return null;
    } //removing first node
    if (this.head.value === value) {
      this.head = this.head.next; //point to the next node
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    //empty list
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i; //found, return index
      }
      i++;
      curr = curr.next; //advance on the list
    }
    return -1; //not found
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      //creating a next node pointer
      let next = curr.next;
      //curr points at prev
      curr.next = prev;
      //advance prev
      prev = curr;
      //advance curr
      curr = next;
    }
    //new first item is head
    this.head = prev;
  }
}

const list = new LinkedList();
console.log("list is empty? ", list.isEmpty());
console.log("list size is ", list.getSize());

list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.print();

list.reverse();
list.print();
