class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this;
  }

  insertAt(position, data) {
    if (position === 0) {
      return this.prepend(data);
    }
    
    const newNode = new Node(data);
    let current = this.head;
    let index = 0;

    while (current && index < position) {
      current = current.next;
      index++;
    }

    if (!current) {
      return this.append(data);
    }

    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    current.prev = newNode;
    
    return this;
  }

  deleteByValue(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return this;
      }
      current = current.next;
    }
    return this;
  }

  deleteAt(position) {
    if (position === 0 && this.head) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return this;
    }

    let current = this.head;
    let index = 0;

    while (current && index < position) {
      current = current.next;
      index++;
    }

    if (current) {
      if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    return this;
  }

  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    return this;
  }

  printReverse() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
    return this;
  }
}

// Example usage:
const list = new LinkedList();
list.append(2).append(3).prepend(1).append(4).append(5).insertAt(3,100);
console.log("Print All:");
list.printAll();