'use strict';


const { fizzBuzzTree, Node } = require('../fizz-buzz-tree/index');


describe('Fizz Buzz tree', () => {
  test('Has a single node', () => {
    const tree = new Node(3);
    const newTree = fizzBuzzTree(tree);

    expect(tree.value).toEqual(3);
    expect(newTree.value).toEqual('Fizz');
  })


  test('Has a root node with two child nodes', () => {
    const tree = new Node(15);
    tree.children.push(new Node(5));
    tree.children.push(new Node(9));
    const newTree = fizzBuzzTree(tree);

    expect(newTree.value).toEqual('FizzBuzz');
    expect(newTree.children[0].value).toEqual('Buzz');
    expect(newTree.children[1].value).toEqual('Fizz');
  });


  test('Has a root node with two child nodes, that each child has child nodes', () => {
    const tree = new Node(10);
    tree.children.push(new Node(3));
    tree.children.push(new Node(20));
    tree.children[0].children.push(new Node(9));
    tree.children[0].children.push(new Node(5));
    tree.children[1].children.push(new Node(6));
    tree.children[1].children.push(new Node(7));
    const newTree = fizzBuzzTree(tree);

    expect(newTree.value).toEqual('Buzz');
    expect(newTree.children[0].value).toEqual('Fizz');
    expect(newTree.children[1].value).toEqual('Buzz');
    expect(newTree.children[0].children[0].value).toEqual('Fizz');
    expect(newTree.children[0].children[1].value).toEqual('Buzz');
    expect(newTree.children[1].children[0].value).toEqual('Fizz');
    expect(newTree.children[1].children[1].value).toEqual('7');
  });


});
