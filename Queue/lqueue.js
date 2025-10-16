// Node class representing each element in the queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue class implementing the queue operations using a linked list
class LinkedListQueue {
  constructor() {
    this.front = null; // Initialize the front of the queue to null
    this.rear = null;  // Initialize the rear of the queue to null
  }

  // Enqueue (add) an element to the rear of the queue
  enqueue(data) {
    const newNode = new Node(data); // Create a new node with the given data
    if (!this.rear) {
      this.front = newNode; // If the queue is empty, the new node is both the front and rear
      this.rear = newNode;
    } else {
      this.rear.next = newNode; // Link the new node at the rear of the queue
      this.rear = newNode; // Update the rear to be the new node
    }
  }

  // Dequeue (remove) an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow - Queue is empty"; // Return an underflow message if the queue is empty
    }
    const dequeuedNode = this.front; // Store the front node to be dequeued
    this.front = this.front.next; // Update the front to the next node
    if (!this.front) {
      this.rear = null; // If the queue is now empty, set the rear to null
    }
    return dequeuedNode.data; // Return the data of the dequeued node
  }

  // Peek at the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Return a message if the queue is empty
    }
    return this.front.data; // Return the data of the front node
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === null; // Return true if the front is null, indicating the queue is empty
  }

  // Print all elements in the queue
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let current = this.front; // Start from the front of the queue
    while (current) {
      console.log(current.data); // Print the data of each node
      current = current.next; // Move to the next node
    }
  }
}

// Example usage:
const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.peek()); // Output: Front element: 10

console.log("Queue elements:");
queue.print(); // Output: 10 20 30

console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 10

console.log("Queue elements after dequeue:");
queue.print(); // Output: 20 30

console.log("Is queue empty?", queue.isEmpty()); // Output: Is queue empty? false
