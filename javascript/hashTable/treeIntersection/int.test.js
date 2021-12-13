const { treeIntersection } = require("./intersection");
const { Tree } = require("../.././trees/tree.js");
const Node = require("../.././trees/node");

describe("treeIntersection", () => {
  test("Find common values in 2 binary trees.", () => {
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
    expect(treeIntersection(tree1.root, tree2.root).contains(7)).toBeTruthy();
    expect(treeIntersection(tree1.root, tree2.root).contains(9)).toBeTruthy();
    expect(treeIntersection(tree1.root, tree2.root).contains(6)).toBeTruthy();
  });
});
