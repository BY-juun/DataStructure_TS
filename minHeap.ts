class MinHeap {
  heap: Number[];
  constructor() {
    this.heap = [];
  }
  swap(x: number, y: number) {
    const temp = this.heap[x];
    this.heap[x] = this.heap[y];
    this.heap[y] = temp;
  }
  getParentIdx(idx: number) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx: number) {
    return idx * 2 + 1;
  }
  getRightChildIdx(idx: number) {
    return idx * 2 + 2;
  }
  push(node: number) {
    this.heap.push(node);

    let idx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (idx > 0 && this.heap[idx] < this.heap[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  pop() {
    if (this.heap.length == 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const result = this.heap[0];

    this.heap[0] = Number(this.heap.pop());

    let idx = 0;

    while (true) {
      let leftChildIdx = this.getLeftChildIdx(idx);
      let rightChildIdx = this.getRightChildIdx(idx);

      if (leftChildIdx >= this.heap.length) break;

      let nextIdx = idx;
      if (this.heap[nextIdx] > this.heap[leftChildIdx]) nextIdx = leftChildIdx;
      if (rightChildIdx < this.heap.length && this.heap[nextIdx] > this.heap[rightChildIdx]) nextIdx = rightChildIdx;

      this.swap(nextIdx, idx);
      if (nextIdx === idx) break;

      idx = nextIdx;
    }
    return result;
  }
}

const minHeap = new MinHeap();

minHeap.push(7);
minHeap.push(5);
minHeap.push(6);
minHeap.push(9);
minHeap.push(1);
minHeap.push(3);
minHeap.push(2);
minHeap.push(4);

console.log(minHeap.heap);

minHeap.pop();
console.log(minHeap.heap);
minHeap.pop();
console.log(minHeap.heap);
