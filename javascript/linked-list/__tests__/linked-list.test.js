'use strict';


const LinkedList = require('../index');


describe('Linked List', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let newList = new LinkedList();

    expect(newList.head).toBeNull();
  });


  test('Can properly insert into the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);

    expect(newList.head.value).toEqual(1);
    expect(newList.head.next).toBeNull;
  });


  test('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();
  })

    test('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
  });


  test('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(1);

    expect(list.includes(1)).toBeTruthy();
  });


  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(1);

    expect(list.includes(3)).toBeFalsy();
  });


  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert('{ c }');
    list.insert('{ b }');
    list.insert('{ a }');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });


  test('Can successfully add a node to the end of the linked list', () => {
    let newList = new LinkedList();
    newList.insert('{ a }');
    newList.insert('{ b }');
    newList.append('{ c }');

    expect(newList.toString()).toEqual('{ b } -> { a } -> { c } -> NULL');
  });


  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.append('{ c }');

    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });


  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertBefore('{ b }','{ c }');

    expect(newList.toString()).toEqual('{ a } -> { c } -> { b } -> NULL');
  });


  test('Can successfully insert a node before the first node of a linked list', () => {
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertBefore('{ a }','{ c }');

    expect(newList.toString()).toEqual('{ c } -> { a } -> { b } -> NULL');
  });


  test('Can successfully insert after a node in the middle of the linked list', () => {
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertAfter('{ a }','{ c }');

    expect(newList.toString()).toEqual('{ a } -> { c } -> { b } -> NULL');
  });


  test('Can successfully insert a node after the last node of the linked list', () => {
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertAfter('{ b }','{ c }');

    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  test('Delete a node with the given value from the linked list.',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.append('{ c }');
    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');

    newList.delete('{ b }');

    expect(newList.toString()).toEqual('{ a } -> { c } -> NULL');
  });


});


