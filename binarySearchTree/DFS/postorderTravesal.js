class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }

  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }

  search(value, root = this.root) {
    if (!root) {
      return false;
    } else {
      if (root.value == value) {
        return true;
      } else if (root.value > value) {
        return this.search(value, root.left);
      } else {
        return this.search(value, root.right);
      }
    }
  }

  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new binarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(15);
bst.insert(12);
bst.insert(25);
bst.insert(5);
bst.insert(8);
bst.insert(3);
bst.postOrder();
console.log(bst.search(12));
console.log(bst.isEmpty());
