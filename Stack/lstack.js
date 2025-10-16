// Node class representing each element in the stack
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack class implementing the stack operations using a linked list
class LinkedListStack {
  constructor() {
    this.top = null; // Initialize the top of the stack to null
  }

  // Push an element onto the stack
  push(data) {
    const newNode = new Node(data); // Create a new node with the given data
    newNode.next = this.top; // Point the new node to the current top
    this.top = newNode; // Update the top to be the new node
  }

  // Pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow - Stack is empty"; // Return an underflow message if the stack is empty
    }
    const poppedNode = this.top; // Store the top node to be popped
    this.top = this.top.next; // Update the top to the next node
    return poppedNode.data; // Return the data of the popped node
  }

  // Peek at the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Return a message if the stack is empty
    }
    return this.top.data; // Return the data of the top node
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null; // Return true if the top is null, indicating the stack is empty
  }

  // Print all elements in the stack
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let current = this.top; // Start from the top of the stack
    while (current) {
      console.log(current.data); // Print the data of each node
      current = current.next; // Move to the next node
    }
  }
}

// Example usage:
const stack = new LinkedListStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: Top element: 30

console.log("Stack elements:");
stack.print(); // Output: 30 20 10

console.log("Popped element:", stack.pop()); // Output: Popped element: 30

console.log("Stack elements after pop:");
stack.print(); // Output: 20 10

console.log("Is stack empty?", stack.isEmpty()); // Output: Is stack empty? false


