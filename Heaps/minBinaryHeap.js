class minBinaryHeap {
    constructor() {
      this.values = [];
    }
  
    insert(val) {
      this.values.push(val);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let idx = this.values.length - 1;
      let child = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
  
        if (child >= parent) break;
        this.values[idx] = parent;
        this.values[parentIdx] = child;
        idx = parentIdx;
      }
    }
  
    extractMin() {
      const min = this.values[0];
      const element = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = element;
        this.sinkDown();
      }
      return min;
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
          if (leftChild < element) swapped = leftIdx;
        }
  
        if (rightIdx < length) {
          rightChild = this.values[rightIdx];
          if (
            (swapped === null && rightChild < element) ||
            (swapped !== null && rightChild < leftChild)
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
  
  const heap = new minBinaryHeap();
  heap.insert(41);
  heap.insert(33);
  heap.insert(39);
  heap.insert(18);
  heap.insert(27);
  heap.insert(12);
  heap.display();
  heap.insert(55);
  heap.display();
  console.log(heap.extractMax())
  heap.display();
  