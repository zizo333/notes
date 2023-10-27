// BigO (avarage)
//    -> inserting O(logn)
//    -> searching O(logn)
// O(n) -> if there are only rights or lefts nodes
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
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
}

let bst = new TreeTraversal();
console.log(bst.insert(5));
console.log(bst.insert(5));
console.log(bst.insert(6));
console.log(bst.insert(4));
console.log(bst.insert(3));
console.log(bst.insert(2));
console.log(bst.root.left);
console.log(bst.find(5));
