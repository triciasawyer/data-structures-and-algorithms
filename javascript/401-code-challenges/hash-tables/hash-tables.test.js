'use strict';

const { Hashtable } = require('./index');


describe('Hash tables', () => {

  test('Setting a key/value to the hashtable, resulting in the value being in the data structure', () => {
    const hashtable = new Hashtable();
    hashtable.set('key1', 'value1');

    expect(hashtable.get('key1')).toEqual('value1');
  });

});


// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully returns a list of all unique keys that exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in -range value
