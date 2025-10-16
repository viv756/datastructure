class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow - Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element without removing it from the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Print all the elements in the stack
  print() {
    console.log(this.items.join(" "));
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: Top element: 30
console.log("Stack size:", stack.size());  // Output: Stack size: 3

stack.print(); // Output: 10 20 30

console.log("Popped element:", stack.pop()); // Output: Popped element: 30
stack.print(); // Output: 10 20

console.log("Is stack empty?", stack.isEmpty()); // Output: Is stack empty? false

stack.items.push(5)
stack.print()