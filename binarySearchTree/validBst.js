//Tree

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
    const node = new Node(value);
    if (this.isEmpty()) this.root = node;
    else {
      this.insertBst(this.root, node);
    }
  }
  insertBst(root, node) {
    if (root.value > node.value) {
      if (root.left === null) root.left = node;
      else this.insertBst(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.insertBst(root.right, node);
    }
  }

  ///DFS
  preOrder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root = this.root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //BFS
  levelOrder() {
    let queue = [this.root];
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root = this.root) {
    if (!root.left) {
      console.log(root.value);
    } else this.min(root.left);
  }

  max(root = this.root) {
    if (!root.right) {
      console.log(root.value);
    } else this.max(root.right);
  }

  isValidBST(tree) {
    function traverse(node, min, max) {
      if (node) {
        if (node.value <= min || node.value >= max) return false
        return (
          traverse(node.left, min, node.value) &&
          traverse(node.right, node.value, max)
        )
      }
      return true
    }
    return traverse(tree)
  }
}

const tree = new binarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.min();
tree.max();
tree.levelOrder();
console.log(tree.isValidBST(tree.root));
console.log(tree.isEmpty());

//Graph

// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex])this.adjacencyList[vertex]=[]
//     }

// addEdge(vertex1,vertex2){
//     if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
//     if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
//     this.adjacencyList[vertex1].push(vertex2)
//     this.adjacencyList[vertex2].push(vertex1)
// }

// checkEdge(vertex1,vertex2){
// return this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)
// }

// display(){
//     for(let i in  this.adjacencyList){
//         console.log(i,'==>',this.adjacencyList[i]);
//     }
// }
// }

// const graph=new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addEdge('A','B')
// graph.addEdge('C','B')
// console.log(graph.checkEdge('A','B'))
// graph.display()
