'use strict';

const { Hashtable } = require('./index');


describe('Hash tables', () => {

  test('Setting a key/value to the hashtable, resulting in the value being in the data structure', () => {
    const hashtable = new Hashtable();
    hashtable.set('key1', 'value1');

    expect(hashtable.get('key1')).toEqual('value1');
  });


  test('Retrieving based on a key returns the value stored', () => {
    const hashtable = new Hashtable();
    hashtable.set('key2', 'value2');

    expect(hashtable.get('key2')).toEqual('value2');
  });


  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashtable = new Hashtable();

    expect(hashtable.get('nonexistent')).toBe(null);
  });


  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const hashtable = new Hashtable();
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key3', 'value3');
    hashtable.set('key4', 'value4');
    const expectedKeys = ['key1', 'key2', 'key3', 'key4'];

    expect(hashtable.keys().sort()).toEqual(expect.arrayContaining(expectedKeys));
  });


  test('Successfully handle a collision within the hashtable', () => {
    const hashtable = new Hashtable();
    hashtable.set('abc', 'value5');
    hashtable.set('cba', 'value6');

    expect(hashtable.get('abc')).toEqual('value5');
    expect(hashtable.get('cba')).toEqual('value6');
  });


  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashtable = new Hashtable();
    hashtable.set('xyz', 'value7');
    hashtable.set('zyx', 'value8');

    expect(hashtable.get('xyz')).toEqual('value7');
    expect(hashtable.get('zyx')).toEqual('value8');
  });


  test('Successfully hash a key to an in -range value', () => {
    const hashtable = new Hashtable();
    const hashValue = hashtable.hash('someKey');

    expect(typeof hashValue).toBe('number');
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(hashtable.size);
  });

});

