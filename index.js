class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class TreeTraversal {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val > current.val) {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val < current.val) {
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(val) {
    if (this.root === null || !val) return false;
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return true;
      } else if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  /*
            10
        6        15
      3   8         20
  */

  BFS() {
    let node = this.root;
    let data = [];
    let queue = []; // FIFO

    queue.push(node);
    while (queue.length !== 0) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let bst = new TreeTraversal();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.BFS());
console.log(bst.DFSPreOrder());
