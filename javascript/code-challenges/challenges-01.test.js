'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

x - Write a function named `addOne`
x - that takes an array of numbers,
x - and returns a new array of the numbers,
x - incremented by 1.

x - Use `forEach` to loop over the input array and work with each value.
x - Push the new value into a local array.
x - Return the local array;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  // Solution code here...
  let newArray = [];
  arr.forEach(arrayElementNumber => {
    newArray.push(arrayElementNumber + 1);
  });
  return newArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

x - Write a function named `addExclamation`
x - that takes an array of strings,
and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array.
Modify each string, and add the updated value into a local array.
x - Return the local array;
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {
  // Solution code here...
  let stringArray = [];
  arr.forEach(arrayExclamation => {
    stringArray.push(arrayExclamation + '!');
  })
  return stringArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

x - Write a function named `allUpperCase`
x - that takes an array of strings,
and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array.
The modified strings should each be added into a local array.
Return that local array.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {
  // Solution code here...
  let upperArray = [];
  arr.forEach(upperCaseArray => {
    upperArray.push(upperCaseArray.toUpperCase());
  })
  return upperArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

x - Write a function named `greeting`
x - that takes in a single string and
x - returns the string in all uppercase letters, and followed by an "!".

x - Then, write a function named `speaker`
x - that takes in an array of strings and a callback function.

x - Use `forEach` to build a new array of strings,
x - each string modified by the callback.
x - Return the new array.
------------------------------------------------------------------------------------------------ */

const greeting = (word) => {
  // Solution code here...
  return word.toUpperCase() + '!';
}

const speaker = (words, callback) => {
  // Solution code here...
  let newArray = [];
  words.forEach(string => {
    newArray.push(callback(string));
  });
  return newArray;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

x - Write a function named addValues
x - that takes in an array and a value
x - and pushes the value into the array.
x - This function does not need a return statement.

x - Then, write a function named addNumbers that takes in four arguments:
x  - A number to be added to an array
x  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
  // Solution code here...
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
  // Solution code here...
  let allArray = [];
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

x - Write a function named createList
x - that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory.
If the item is available, add it to your list.
Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  // Solution code here...
  let list = [];
  availableItems.forEach((item) => {
    if (item.available) {
      list.push(item.name);
    }
  })
  return list;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

describe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
