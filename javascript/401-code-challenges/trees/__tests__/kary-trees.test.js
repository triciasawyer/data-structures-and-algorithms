'use strict';

const { KaryTree } = require('../index');


describe('KaryTrees', () => {
  test('Can successfully add a single node to an empty K-ary tree', () => {
    const kTree = new KaryTree(3);
    kTree.add(5);

    expect(kTree.root.value).toEqual(5);
  });


  test('Can successfully add multiple nodes to an empty K-ary tree', () => {
    const kTree = new KaryTree(2);
    kTree.add(5);
    kTree.add(3);
    kTree.add(8);
    kTree.add(2);
    kTree.add(7);


    expect(kTree.root.value).toEqual(5);
    expect(kTree.root.children[0].value).toEqual(3);
    expect(kTree.root.children[1].value).toEqual(8);
    expect(kTree.root.children[0].children[0].value).toEqual(2);
    expect(kTree.root.children[1].children[0].value).toEqual(7);
// kTree.root.children[1].children[0].value should be 7
  });



});
