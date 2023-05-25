'use strict';

// Require our linked list implementations
const { LinkedList } = require('../index');


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

const lists = (list2, list1);
expect(lists.toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL');
});


test('List 1 is longer than list 2', () => {
let list3 = new LinkedList();
list3.append(1);
list3.append(3);
list3.append(5);
list3.append(7);

let list4 = new LinkedList();
list4.append(2);
list4.append(4);
list4.append(6);

const zippedList2 = zipLists(list3, list4);
expect(lists.toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> NULL');
});



});
