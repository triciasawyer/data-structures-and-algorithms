'use strict';


const { breadthFirst } = require('../breadth-first-tree/index');


describe('Breadth first', () => {
test('Single node in tree', () => {
  const tree = { value: 1 };

  expect(breadthFirst(tree)).toEqual([1]);
});


});
