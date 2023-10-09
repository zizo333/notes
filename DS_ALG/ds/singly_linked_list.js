// O(n)
// insertion : O(1) no shifting
// removal : O(1) -> O(n)
// searching : O(n) -> get(value)
// access : O(n) -> getAt(2)
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  #length;
  #head;
  #tail;

  constructor() {
    this.#length = 0;
    this.#head = null;
    this.#tail = null;
  }

  print() {
    console.log(this.#head);
  }

  push(value) {
    let node = new Node(value);
    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#length++;

    return this.#head;
  }

  pop() {
    if (this.#length === 0) return null;
    let currentNode = this.#head;
    let prevNode = this.#head;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    this.#tail = prevNode;
    this.#length--;
    if (this.#length === 0) {
      this.#head = null;
    }
    return currentNode;
  }

  unshift(value) {
    let node = new Node(value);
    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#length++;
    return this.#head;
  }

  shift() {
    if (this.#length === 0) return null;
    let currentNode = this.#head;
    this.#head = currentNode.next;
    if (this.#length === 0) {
      this.#tail = unll;
    }

    return currentNode;
  }

  getAt(index) {
    if (index < 0 || index >= this.#length) return null;
    let counter = 0;
    let currentNode = this.#head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(value, index) {
    let foundNode = this.getAt(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  get(value) {
    if (this.#length === 0) return null;
    let currentNode = this.#head;
    let node;
    while (currentNode) {
      if (currentNode.value === value) {
        node = currentNode;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }

    return node;
  }

  insert(value, index) {
    if (index < 0 || index > this.#length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.#length) return this.push(value);
    let nextNode = this.getAt(index);
    let prevNode = this.getAt(index - 1);
    let currentNode = new Node(value);
    currentNode.next = nextNode;
    prevNode.next = currentNode;
    this.#length++;
    return this.#head;
  }

  remove(index) {
    if (index < 0 || index > this.#length) return null;
    if (index === 0) return this.shift();
    if (index === this.#length - 1) return this.pop();
    let prevNode = this.getAt(index - 1);
    let removedNode = this.getAt(index);
    prevNode.next = removedNode.next;
    this.#length--;
    return removedNode;
  }

  reverse() {
    let node = this.#head;
    this.#head = this.#tail;
    this.#tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.#length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  get length() {
    return this.#length;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.print();
list.reverse();
list.print();
// list.pop();
// console.log(list.pop());
// console.log(list.pop());
// list.unshift(0);
// list.print();
// list.pop();
// list.pop();
// list.shift();
// console.log(list.insert(11, 1));
// list.shift();
// list.unshift(33);
// list.print();

// console.log(list.get(10));
// console.log(list.set("hello", 1));
// console.log(list.getAt(1));
// list.print();
// console.log("****");
// console.log(list.remove(list.length - 1));
// console.log("****");
// list.print();
