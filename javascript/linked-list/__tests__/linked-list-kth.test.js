'use strict';


const LinkedList = require('../index');


describe('Linked List method kthFromEnd', () => {
test('K is greater than the length of the linked list', () => {
  let newList = new LinkedList();
  newList.insert(0);
  newList.insert(1);
  newList.insert(2);
  newList.insert(3);
  newList.insert(4);

  expect(newList.kthFromEnd(6)).toEqual('Exception');
});


test('K and the length of the list are the same', () => {
  let newList = new LinkedList();
  newList.insert(0);
  newList.insert(1);
  newList.insert(2);
  newList.insert(3);
  newList.insert(4);

  expect(newList.kthFromEnd(5)).toEqual(4);
});


test('K is not a positive integer', () => {
  let newList = new LinkedList();
  newList.insert(0);
  newList.insert(1);
  newList.insert(2);
  newList.insert(3);
  newList.insert(4);

  expect(newList.kthFromEnd(-5)).toEqual('Exception');
});


test('Linked list is of a size 1', () => {
  let newList = new LinkedList();
    newList.insert(2);
    let fromEnd = newList.kthFromEnd(1);

    expect(fromEnd).toEqual(2);
});


test('"Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  let newList = new LinkedList();
  newList.insert(0);
  newList.insert(1);
  newList.insert(2);
  newList.insert(3);
  newList.insert(4);
  let fromEnd = newList.kthFromEnd(3);
  
  expect(fromEnd).toEqual(2);
});


});

