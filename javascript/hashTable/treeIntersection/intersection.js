"use strict";
// Find common values in 2 binary trees with a hashtable.
//import the binary tree module
const { Tree } = require("../.././trees/tree.js");
const Hashtable = require(".././hashTable");
const Node = require("../.././trees/node");

function treeIntersection(root1, root2) {
   const result = new Hashtable(10);
  const _recorse = (root1, root2) => {
    let i = Math.ceil(Math.random(10) * 10);
    if (!root1 || !root2) return;
    if (root1.value === root2.value) {
      result.add(root1.value, root1.value);
    }
    _recorse(root1.left, root2.left);
    _recorse(root1.right, root2.right);
  };
  _recorse(root1, root2);
  console.log(JSON.stringify(result), null, 2);
  return result;
}

let tree1 = new Tree();
tree1.root = new Node(
  1,
  new Node(8, new Node(7), new Node(6)),
  new Node(3, new Node(9), new Node(6))
);
let tree2 = new Tree();
tree2.root = new Node(
  2,
  new Node(4, new Node(7), new Node(2)),
  new Node(3, new Node(9), new Node(6))
);
module.exports = { treeIntersection };
console.log(treeIntersection(tree1.root, tree2.root));
