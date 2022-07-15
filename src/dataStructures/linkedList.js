// An advantage of Linked Lists
// Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.

// Disadvantages of Linked Lists
// Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
// It uses more memory than arrays because of the storage of the pointers.


class LinkedList {
  constructor() {
    this.size = 0
    this.root = null
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root
    while (node.next) {
      node = node.next
    }
    let newNode = new Node(value)
    node.next = newNode
    this.size += 1
  }

  getSize() {
    return this.size
  }

  print() {
    let result = []
    let node = this.root
    while (node) {
      result.push(node.value)
      node = node.next
    }
    console.log(result);;
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(2)
list.add(5)
list.add(7)
