'use strict';


const { KaryTree } = require('../indexK');


describe('KaryTrees', () => {
  let karyTree;

  beforeEach(() => {
    karyTree = new KaryTree(3);
  });


  test('Can instantiate an emtpy k-ary tree', () => {
    expect(karyTree.root).toBe(null);
  });


  test('Can successfully add nodes to an empty K-ary tree', () => {
    karyTree.add(1);

    expect(karyTree.root.value).toBe(1);
    expect(karyTree.root.children.length).toBe(0);
  });


  test('Can add multiple nodes to a K-ary tree', () => {
    karyTree.add(1);

    expect(karyTree.root.value).toBe(1);
    expect(karyTree.root.children.length).toBe(0);

    karyTree.add(2, 1);

    expect(karyTree.root.children.length).toBe(1);
    expect(karyTree.root.children[0].value).toBe(2);

    karyTree.add(3, 1);

    expect(karyTree.root.children.length).toBe(2);
    expect(karyTree.root.children[1].value).toBe(3);
  });


  test('Checks if a value exists in the K-ary tree', () => {
    karyTree.add(1);
    karyTree.add(2, 1);
    karyTree.add(3, 1);
    karyTree.add(4, 2);
    karyTree.add(5, 2);

    expect(karyTree.contains(1)).toBe(true);
    expect(karyTree.contains(5)).toBe(true);
    expect(karyTree.contains(6)).toBe(false);
  });


});


module.exports = { KaryTree };

