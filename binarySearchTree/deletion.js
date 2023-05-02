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

  min(root = this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root = this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.min(root.right);
    }
  }

  levelOrder() {
    let queue = [this.root];
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (root.value > value) {
      this.deleteNode(root.left, value);
    } else if (root.value < value) {
      this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, value);
    }
    return root;
  }
}

const bst = new binarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(12);
bst.insert(25);
bst.insert(5);
bst.insert(8);
bst.insert(3);
bst.delete(3);
bst.levelOrder();
