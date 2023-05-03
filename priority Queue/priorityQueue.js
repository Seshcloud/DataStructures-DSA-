class Node{
    constructor(value,priority){
        this.val=value,
        this.priority=priority
    }
}

class priorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(val,priority) {
const node=new Node(val,priority)
      this.values.push(node);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let idx = this.values.length - 1;
      let child = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
  
        if (child.priority <= parent.priority) break;
        this.values[idx] = parent;
        this.values[parentIdx] = child;
        idx = parentIdx;
      }
    }
  
    dequeue() {
      const max = this.values[0];
      const element = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = element;
        this.sinkDown();
      }
      return max;
    }
  
    sinkDown() {
      let idx = 0;
      let length = this.values.length;
      let element = this.values[0];
      while (true) {
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swapped = false;
  
        if (leftIdx < length) {
          leftChild = this.values[leftIdx];
          if (leftChild.priority > element.priority) swapped = leftIdx;
        }
  
        if (rightIdx < length) {
          rightChild = this.values[rightIdx];
          if (
            (swapped === null && rightChild.priority > element.priority) ||
            (swapped !== null && rightChild.priority > leftChild.priority)
          )
            swapped = rightIdx;
        }
  
        if (swapped === false) break;
        this.values[idx] = this.values[swapped];
        this.values[swapped] = element;
        idx = swapped;
      }
    }
  
    display() {
      for (let i = 0; i < this.values.length; i++) {
        console.log(this.values[i]);
      }
    }
  }
  
  const pQueue = new priorityQueue();
  pQueue.enqueue('stomach pain',5)
  pQueue.enqueue('high fever',10)
  pQueue.enqueue('low fever',2)
  pQueue.enqueue('leg injury',8)
  pQueue.enqueue('lose motion',4)
  pQueue.display();
  console.log(pQueue.dequeue())
  pQueue.display();
  