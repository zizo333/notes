// O(n)
// insertion : O(1) no shifting
// removal : O(1) -> O(n)
// searching : O(n)
// access : O(n/2) -> O(n) -> get(2)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    if (!val) return undefined;
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode;
    let count;

    if (index <= this.length / 2) {
      currentNode = this.head;
      count = 0;
      while (index !== count) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      currentNode = this.tail;
      count = this.length - 1;
      while (index !== count) {
        currentNode = currentNode.prev;
        count--;
      }
    }

    return currentNode;
  }

  set(val, index) {
    let foundedNode = this.get(index);
    if (foundedNode) {
      foundedNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    newNode.next.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    if (removedNode) {
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    } else {
      return undefined;
    }
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.unshift(1);
// list.unshift(2);
// console.log(list.get(4));
// console.log(list.insert(11, 0));
console.log(list.remove(3));
console.log(list.head);
