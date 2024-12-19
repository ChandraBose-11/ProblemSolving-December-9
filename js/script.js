class Stack {
  constructor(size = +Infinity) {
    this.stack = [];
    this.top = -1;
    this.size = size;
  }
  isEmpty() {
    return this.top == -1;
  }
  isFull() {
    return this.top == this.size - 1;
  }
  push(value) {
    if (this.isFull()) {
      console.error("Stack Overflow");
      return;
    }
    this.top++;
    this.stack.push(value);
    return this.top;
  }
  pop() {
    if (this.isEmpty()) {
      console.error("Stack Underflow");
      return;
    }
    this.top--;
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      console.warn("Stack is empty");
      return;
    }
    return this.stack[this.top];
  }
}
function getQueue() {
  const stack1 = new Stack();
  const stack2 = new Stack();

  return {
    enqueue: (value) => stack1.push(value),
    dequeue: () => {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop());
      }
      const value = stack2.pop();
      while (!stack2.isEmpty()) {
        stack1.push(stack2.pop());
      }
      return value;
    },
    peek: () => {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop());
      }
      const value = stack2.peek();
      while (!stack2.isEmpty()) {
        stack1.push(stack2.pop());
      }
      return value;
    },
  };
}

function nextGreaterElement(arr) {
  const res = Array(arr.length).fill(-1);
  const stack = new Stack();
  for (let ind = arr.length - 1; ind >= 0; ind--) {
    while (!stack.isEmpty() && stack.peek() <= arr[ind]) {
      stack.pop();
    }
    if (!stack.isEmpty()) res[ind] = stack.peek();
    stack.push(arr[ind]);
  }

  console.log(res);
}

console.log(nextGreaterElement([5, 4, 3, 2, 1, 0].reverse()));
