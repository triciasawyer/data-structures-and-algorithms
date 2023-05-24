'use strict';

// Require our linked list implementation
const LinkedList = require('../index');
const { ZipLists } = require('../linked-list-zip.js');

describe('Linked List Zip', () => {
  test('Lists are equal length', () => {
    let list1 = new LinkedList();
    list1.append('{ 1 }');
    list1.append('{ 2 }');
    let list2 = new LinkedList();
    list2.append('{ a }');
    list2.append('{ b }');

    expect(ZipLists(list1, list2).toString()).toEqual('{ 1 } -> { a } -> { 2 } -> { b } -> NULL');
  });


  test('List1 is longer than list2', () => {
    let list1 = new LinkedList();
    list1.append('{ 1 }');
    list1.append('{ 2 }');
    list1.append('{ 3 }');
    list1.append('{ 4 }');
    let list2 = new LinkedList();
    list2.append('{ a }');
    list2.append('{ b }');

    expect(ZipLists(list1, list2).toString()).toEqual('{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { 4 } -> NULL');
  });


  test('List2 is longer than list1', () => {
    let list1 = new LinkedList();
    list1.append('{ 1 }');
    list1.append('{ 2 }');
    let list2 = new LinkedList();
    list2.append('{ a }');
    list2.append('{ b }');
    list2.append('{ c }');
    list2.append('{ d }');

    expect(ZipLists(list1, list2).toString()).toEqual('{ 1 } -> { a } -> { 2 } -> { b } -> { c } -> { d } -> NULL');
  });


  test('List is empty', () => {
    let emptyList = new LinkedList;
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 2 }');

    expect(ZipLists(emptyList, list2).toString()).toEqual('{ 1 } -> { 2 } -> NULL');
  });


});
