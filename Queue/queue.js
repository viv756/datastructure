class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow - Queue is empty";
    }
    return this.items.shift();
  }

  // Return the front element without removing it from the queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Print all the elements in the queue
  print() {
    console.log(this.items.join(" "));
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.peek()); // Output: Front element: 10
console.log("Queue size:", queue.size());    // Output: Queue size: 3

queue.print(); // Output: 10 20 30

console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 10
queue.print(); // Output: 20 30

console.log("Is queue empty?", queue.isEmpty()); // Output: Is queue empty? false
