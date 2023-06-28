const { treeIntersection, traverseTree, BinaryTree, Node } = require('./tree-intersection');


describe('Tree intersection functionality', () => {
  test('Can successfully return a set of values found in two binary trees', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(100);
    tree1.root.left = new Node(125);
    tree1.root.right = new Node(175);
    tree1.root.left.left = new Node(160);
    tree1.root.right.left = new Node(200);

    const tree2 = new BinaryTree();
    tree2.root = new Node(200);
    tree2.root.left = new Node(125);
    tree2.root.right = new Node(350);
    tree2.root.left.left = new Node(160);
    tree2.root.right.right = new Node(500);

    expect(treeIntersection(tree1, tree2)).toEqual(new Set([125, 160, 200]));
  });

  
  test('Should add node values to the values set', () => {
    const valuesSet = new Set();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.left = node2;
    node1.right = node3;

    traverseTree(node1, valuesSet);

    expect(valuesSet).toEqual(new Set([1, 2, 3]));
  });


  test('Should handle empty tree', () => {
    const valuesSet = new Set();
    const node = null;

    traverseTree(node, valuesSet);

    expect(valuesSet).toEqual(new Set());
  });


});
