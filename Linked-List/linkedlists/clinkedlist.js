class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // ✅ Insert at the end
  append(data) {
      let newNode = new Node(data);

      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = this.head;  // Circular link
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
          this.tail.next = this.head;  // Maintain circular reference
      }
  }

  // ✅ Insert at the beginning
  prepend(data) {
      let newNode = new Node(data);

      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = this.head;
      } else {
          newNode.next = this.head;
          this.head = newNode;
          this.tail.next = this.head; // Keep circular reference
      }
  }

  // ✅ Insert at a specific position
  insertAt(data, position) {
      if (position < 0) return "Invalid position";

      let newNode = new Node(data);
      if (position === 0) {
          this.prepend(data);
          return;
      }

      let current = this.head;
      let index = 0;
      let previous = null;

      do {
          if (index === position) {
              previous.next = newNode;
              newNode.next = current;
              return;
          }
          previous = current;
          current = current.next;
          index++;
      } while (current !== this.head);

      this.append(data);  // If position is greater than length, append at the end
  }

  // ✅ Remove a node by value
  remove(data) {
      if (!this.head) return "Underflow - List is empty";

      let current = this.head;
      let previous = this.tail;

      do {
          if (current.data === data) {
              if (this.head === this.tail) {
                  // If only one node in the list
                  this.head = this.tail = null;
              } else if (current === this.head) {
                  this.head = current.next;
                  this.tail.next = this.head;
              } else if (current === this.tail) {
                  this.tail = previous;
                  this.tail.next = this.head;
              } else {
                  previous.next = current.next;
              }
              return "Node removed successfully";
          }
          previous = current;
          current = current.next;
      } while (current !== this.head);

      return "Node not found";
  }

  // ✅ Remove a node at a specific position
  removeAt(position) {
      if (!this.head) return "Underflow - List is empty";
      if (position < 0) return "Invalid position";

      let current = this.head;
      let previous = this.tail;
      let index = 0;

      do {
          if (index === position) {
              if (this.head === this.tail) {
                  this.head = this.tail = null;
              } else if (current === this.head) {
                  this.head = current.next;
                  this.tail.next = this.head;
              } else if (current === this.tail) {
                  this.tail = previous;
                  this.tail.next = this.head;
              } else {
                  previous.next = current.next;
              }
              return "Node removed successfully";
          }
          previous = current;
          current = current.next;
          index++;
      } while (current !== this.head);

      return "Position out of range";
  }

  // ✅ Search for a node
  find(data) {
      if (!this.head) return "List is empty";

      let current = this.head;
      let index = 0;

      do {
          if (current.data === data) return `Node found at position ${index}`;
          current = current.next;
          index++;
      } while (current !== this.head);

      return "Node not found";
  }

  // ✅ Count nodes in the list
  countNodes() {
      if (!this.head) return 0;

      let count = 0;
      let current = this.head;

      do {
          count++;
          current = current.next;
      } while (current !== this.head);

      return count;
  }

  // ✅ Display the circular linked list
  display() {
      if (!this.head) {
          console.log("List is empty");
          return;
      }

      let current = this.head;
      let result = "";

      do {
          result += current.data + " -> ";
          current = current.next;
      } while (current !== this.head);

      console.log(result + "(head)");
  }
}

// ✅ Example Usage
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.display();  // Output: 10 -> 20 -> 30 -> (head)

cll.prepend(5);
cll.display();  // Output: 5 -> 10 -> 20 -> 30 -> (head)

cll.insertAt(15, 2);
cll.display();  // Output: 5 -> 10 -> 15 -> 20 -> 30 -> (head)

console.log(cll.remove(20)); 
cll.display();  // Output: 5 -> 10 -> 15 -> 30 -> (head)

console.log(cll.removeAt(2)); 
cll.display();  // Output: 5 -> 10 -> 30 -> (head)

console.log(cll.find(10));  // Output: Node found at position 1
console.log(cll.countNodes()); // Output: 3
