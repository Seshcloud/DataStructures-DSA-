class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  heapify(arr){
    while(arr.length>0){
    this.insert(arr.shift())
    }
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

      if (child <= parent) break;
      this.values[idx] = parent;
      this.values[parentIdx] = child;
      idx = parentIdx;
    }
  }

  extractMax() {
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
        if (leftChild > element) swapped = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swapped === null && rightChild > element) ||
          (swapped !== null && rightChild > leftChild)
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

const heap = new maxBinaryHeap();
heap.heapify([18,21,41,33,39,12,58])
heap.display();
heap.extractMax()
heap.display();
