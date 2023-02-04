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

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left); //recursively traverse left tree
      this.preOrder(root.right); //recursively traverse right tree
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left); //recursively traverse left tree
      console.log(root.value); //print value
      this.inOrder(root.right); //recursively traverse right tree
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left); //recursively traverse left tree
      this.postOrder(root.right); //recursively traverse right tree
      console.log(root.value); //printing vlaue
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty:", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log("Tree is empty:", bst.isEmpty());
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));
//bst.preOrder(bst.root);
//bst.inOrder(bst.root);
//bst.postOrder(bst.root);
bst.levelOrder();
