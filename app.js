class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    return this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const newStack = new Stack();

newStack.push(0);
newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack);

newStack.pop();
console.log(newStack);

console.log(`Is stack empty? ${newStack.isEmpty()}`);

newStack.data.forEach(item => {
  console.log(`Stack item: ${item}`);
});

console.log('Stack length:', newStack.peek());