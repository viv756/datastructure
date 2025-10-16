class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }

  isEmpty() {
    return this.size === null;
  }

  getSize() {
    return console.log(this.size);
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("empty");
    } else {
      let current = this.head;
      let listValues = " ";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let pre = this.head;
      while (pre.next) {
        pre = pre.next;
      }
      pre.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("not valid");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    
    if (index < 0 || index >= this.size) {
      return console.log("no");
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index-1 ; i++) {
        prev = prev.next;
      }
      
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    let removeNode;
    if (prev.next) {
      removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
      return value;
    }
    return null;
  }
  search(value) {
    if (this.isEmpty()) {
      return null;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.append(10);
list.getSize();
list.removeFrom(3);

list.print();
