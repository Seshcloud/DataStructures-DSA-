class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Linkedlist {
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
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      return "empty linkedList";
    } else {
      let listValues = "";
      let curr = this.head;
      while (curr) {
        listValues += ` ${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  append(value) {
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      this.size++;
    }
  }
}

const list = new Linkedlist();

list.prepend(20);
list.prepend(30);
list.append(40);
list.append(10);
list.print();
list.sort();
