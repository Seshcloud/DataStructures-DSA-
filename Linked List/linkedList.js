///basics/////////
class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  isEmpty() {
    return this.size === 0;
  }

  gettSize() {
    return this.size;
  }

  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("invalid index");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removal(index) {
    if (index < 0 || index > this.size) {
      return console.log("invalid index");
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  reversal(node = this.head) {
    if (node.next === null) {
      console.log(node.data);
      return node;
    }
    this.reversal(node.next);
    console.log(node.data);
  }

  print() {
    if (this.isEmpty()) {
      console.log("empty list");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.data} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log("list is empty?", list.isEmpty());

// list.print();
list.prepend(50);
// list.print();
list.append(10);
list.append(40);
list.append(30);
list.insert(60, 3);

list.print();
// list.removal(2);
// list.print();

list.reversal();
console.log("size is", list.gettSize());
