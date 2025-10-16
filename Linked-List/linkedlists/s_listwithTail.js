class Node{
  constructor(value) {
    this.value = value
    this.next =null
  }
}

class LinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty() {
    return this.size===0
  }
  getSize() {
  return console.log(this.size);
  
  }

  print() {
    if (this.isEmpty()) {
    return  console.log(null);
      
    }
    let current = this.head
    let list =''
    while (current) {
      list +=`${current.value}`
      current = current.next
    }
return console.log(list);

  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }
  deletionfront() {
    if (this.isEmpty()) {
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }
  deletionEnd() {
    if (this.isEmpty()) {
      return null
    }
    const value = this.tail.value
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = this.head
      while (prev.next !== this.tail) {
        prev = prev.next

      }
      prev.next = null
      this.tail = prev
    }
    this.size--
    return value
  }
}