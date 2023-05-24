'use strict';

// Require our linked list implementations
const LinkedList = require('../index');
const { ZipLists, ZipSort } = require('../linked-list-zip.js');

describe('Linked List Zip', () => {
  test('Zip lists are equal length', () => {
    let list1 = new LinkedList();
    list1.append('{ 1 }');
    list1.append('{ 2 }');
    let list2 = new LinkedList();
    list2.append('{ a }');
    list2.append('{ b }');

    expect(ZipLists(list1, list2).toString()).toEqual('{ 1 } -> { a } -> { 2 } -> { b } -> NULL');
  });


  test('Zip list1 is longer than list2', () => {
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


  test('Zip list2 is longer than list1', () => {
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


  test('Zip list is empty', () => {
    let emptyList = new LinkedList;
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 2 }');

    expect(ZipLists(emptyList, list2).toString()).toEqual('{ 1 } -> { 2 } -> NULL');
  });


  // stretch goal
  test('ZipSort lists are equal length', () => {
    let list1 = new LinkedList();
    list1.append('{ a }');
    list1.append('{ c }');
    list1.append('{ d }');
    let list2 = new LinkedList();
    list2.append('{ b }');
    list2.append('{ e }');
    list2.append('{ f }');
    expect(ZipSort(list1, list2).toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');
  });


  test('ZipSort list1 is longer than list2', () => {
    let list1 = new LinkedList();
    list1.append('{ a }');
    list1.append('{ d }');
    list1.append('{ e }');
    list1.append('{ f }');
    let list2 = new LinkedList();
    list2.append('{ b }');
    list2.append('{ c }');
    expect(ZipSort(list1, list2).toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');
  });


  test('ZipSort list2 is longer than list1', () => {
    let list1 = new LinkedList();
    list1.append('{ b }');
    list1.append('{ c }');
    let list2 = new LinkedList();
    list2.append('{ a }');
    list2.append('{ d }');
    list2.append('{ e }');
    list2.append('{ f }');
    expect(ZipSort(list1, list2).toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');
  });


  test('ZipSort lists have equal values', () => {
    let list1 = new LinkedList();
    list1.append('{ a }');
    list1.append('{ c }');
    list1.append('{ d }');
    let list2 = new LinkedList();
    list2.append('{ c }');
    list2.append('{ d }');
    list2.append('{ e }');
    expect(ZipSort(list1, list2).toString()).toEqual('{ a } -> { c } -> { c } -> { d } -> { d } -> { e } -> NULL');
  });


  test('ZipSort list is empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list2.append(1);
    list2.append(2);
    list2.append(3);
    list2.append(4);
    list2.append(5);
    list2.append(6);
    expect(ZipSort(list1, list2).toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL');
  });


});
