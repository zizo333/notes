// Big(O) ->
// insertion -> O(1)
// removal -> O(1)
// searching -> O(n)
// access -> O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.size == 0) return null;
    let removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return removedNode.val;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.first);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
