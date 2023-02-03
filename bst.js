class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    //create a node
    const newNode = new Node(value);
    //tree is empty, value = root
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      //check if left child node is empty
      if (root.left === null) {
        root.left = newNode; //becomes left child
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      //check if right child is empty
      if (root.right === null) {
        root.right = newNode; //becomes right child
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value); //recursively traverse left side
      } else {
        return this.search(root.right, value); //recursively traverse right side
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty:", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log("Tree is empty:", bst.isEmpty());
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));
