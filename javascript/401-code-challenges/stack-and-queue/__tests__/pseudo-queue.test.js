const { PseudoQueue } = require('../index');


describe('PseudoQueue', () => {
  test('Can successfully enqueue a value into a stack', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);

    expect(pseudoQueue.stack1.top.value).toEqual(1);
  });


  test('Can successfully enqueue multiple values into a stack', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);

    expect(pseudoQueue.stack1.top.value).toEqual(2);
    expect(pseudoQueue.stack1.top.next.value).toEqual(1);
  });


  test('Can successfully dequeue a value in a stack', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);

    expect(pseudoQueue.stack1.top.value).toEqual(2);
    expect(pseudoQueue.stack1.top.next.value).toEqual(1);

    pseudoQueue.dequeue(1)

    expect(pseudoQueue.stack1.top.value).toEqual(1);
    expect(pseudoQueue.stack1.top.next).toBeNull();
  });


  test('Can successfully dequeue multiple values in a stack', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);

    expect(pseudoQueue.stack1.top.value).toEqual(2);
    expect(pseudoQueue.stack1.top.next.value).toEqual(1);

    pseudoQueue.dequeue(2)
    pseudoQueue.dequeue(1)

    expect(pseudoQueue.stack1.top).toBeNull();
  });


});
