'use strict';

// Require our linked list implementations
const { LinkedList, zipLists } = require('../index');


describe('Linked list', () => {
  test('Lists are both equal length', () => {
let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

let list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);


expect(list1.toString()).toEqual('1 -> 3 -> 5 -> NULL');
expect(list2.toString()).toEqual('2 -> 4 -> 6 -> NULL');
expect(zipLists(list1, list2).toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL');
});


test('List 1 is longer than list 2', () => {
let list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);

let list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);

expect(list1.toString()).toEqual('1 -> 2 -> 3 -> 4 -> NULL');
expect(list2.toString()).toEqual('1 -> 2 -> 3 -> NULL');
expect(zipLists(list1, list2).toString()).toEqual('1 -> 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> NULL');
});


test('List 2 is longer than list 1', () => {
  let list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);

  let list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  list2.append(3);
  list2.append(4);

  expect(list1.toString()).toEqual('1 -> 2 -> 3 -> NULL');
  expect(list2.toString()).toEqual('1 -> 2 -> 3 -> 4 -> NULL');
  expect(zipLists(list1, list2).toString()).toEqual('1 -> 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> NULL');
});


test('If a list is empty', () => {
let list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);

  let list2 = new LinkedList();

  expect(list1.toString()).toEqual('1 -> 2 -> 3 -> NULL');
  expect(zipLists(list1, list2).toString()).toEqual('1 -> 2 -> 3 -> NULL');
});


});
