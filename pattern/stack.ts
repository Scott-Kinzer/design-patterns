class StackNode {
  lastValue: number;
  nextValue: null | StackNode;

  constructor(value: number) {
    this.lastValue = value;
    this.nextValue = null;
  }
}

class Stack {
  root: StackNode | null;
  n: number;

  constructor() {
    this.root = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  push(value: number) {
    const oldNode = this.root;
    this.root = new StackNode(value);
    this.root.nextValue = oldNode;
    this.n++;
  }

  pop() {
    if (this.isEmpty()) return;

    const currentNode = this.root;
    if (currentNode) {
      this.root = currentNode?.nextValue;
      this.n--;
    }
  }
}
