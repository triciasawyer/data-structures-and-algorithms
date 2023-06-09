# Data Structures and Algorithms

## Language: `JavaScript`

### Folder and Challenge Setup

Each type of code challenge has slightly different instructions. Please refer to the notes and examples below for instructions for each DS&A assignment type.

### Data Structure: New Implementation

- Create a new folder under the `javascript` level, with the name of the data structure and complete your implementation there
  - i.e. `linked-list`
- Implementation (the data structure "class")
  - The implementation of the data structure must be named `index.js`
  - Your implementation must be completed as a proper ES6 Class, and exported as a node module
    - Class Name must be `ProperCase`
    - Class Methods must be `camelCase`

    ```javascript
    class LinkedList {
      constructor() {
        // code
      }

      methodName() {
        // code
      }

    }
    module.exports = LinkedList;
    ```

- Tests
  - Create folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linked-list.test.js`
    - Your tests will then need to require the data structure you're testing
      - i.e. `const LinkedList = require('../index');

### Data Structure: Extending an implementation

- Work within the data structure implementation
- Create a new method within the class that solves the code challenge
  - Remember, you'll have access to `this` within your class methods
- Tests
  - You will have folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linked-list.test.js`
    - Add to the tests written for this data structure to cover your new method(s)

### Code Challenge / Algorithm

Code challenges should be completed within a folder named `code-challenges` under the `javascript` level

- Daily Setup:
  - Create a new folder under the `javascript` level, with the name of the code challenge
    - Each code challenge assignment identifies the branch name to use, for example 'find-maximum-value'
    - For clarity, create your folder with the same name, ensuring that it's `kebab-cased`
    - i.e. For a challenge named 'find-maximum-value', create the folder:`code-challenges/find-maximum-value`
  - Code Challenge Implementation
    - Each code challenge requires a function be written, for example "find maximum value"
    - Name the actual challenge file with the name of the challenge, in `kebab-case`
      - i.e. `find-maximum-value.js`
    - Reminder: Your challenge file will then need to require the data structure you're using to implement
      - i.e. `const LinkedList = require('../linked-list');
    - Your challenge function name is up to you, but it's recommended that you use camel case
      - i.e. `function findMaximumValue(list) { ... }`
    - Be sure to export your function so that you can write tests
  - Tests
    - Create folder named `__tests__` and within it, a test file called `[challenge].test.js`
      - i.e. `__tests__/find-maximum-value.test.js`
      - Your test file would require the challenge file found in the directory above, which has your exported function
        - i.e. `const reverse = require('../find-maximum-value.js');

## Running Tests

If you setup your folders according to the above guidelines, running tests becomes a matter of deciding which tests you want to execute.  Jest does a good job at finding the test files that match what you specify in the test command

From the `data-structures-and-algorithms/javascript` folder, execute the following commands:

- **Run every possible test** - `npm test`
- **Run a test for a data structure** - `npm test linked-list`
- **Run a test for a specific challenge** - `npm test reverse-ll`

### Tests

- [code challenge 5,6 - linked list tests](../javascript/linked-list/__tests__/linked-list.test.js)
- [code challenge 7 - linked list kth tests](../javascript/linked-list/__tests__/linked-list-kth.test.js)
- [code challenge 8 - linked list zip tests](../javascript/linked-list/__tests__/linked-list-zip.test.js)
- [code challenge 10 - stack and queue tests](../javascript/401-code-challenges/stack-and-queue/__tests__/)
- [code challenge 11 - stack and queue tests](../javascript/401-code-challenges/stack-and-queue/__tests__/pseudo-queue.test.js)
- [code challenge 12 - stack and queue animal shelter tests](../javascript/401-code-challenges/stack-and-queue/__tests__/stack-queue-animal-shelter.test.js)
- [code challenge 13 - stack and queue brackets](../javascript/401-code-challenges/stack-and-queue/__tests__/stack-queue-brackets.test.js)
- [code challenge 15 - trees](../javascript/401-code-challenges/trees/__tests__/trees.test.js)
- [code challenge 15 - K-ary trees](../javascript/401-code-challenges/trees/__tests__/kary-trees.test.js)
- [code challenge 16 - Binary tree max value](../javascript/401-code-challenges/trees/__tests__/max-value.test.js)
- [code challenge 17 - Binary tree breadth first](../javascript/401-code-challenges/trees/__tests__/breadth-first.test.js)
- [code challenge 18 - Fizz Buzz K-ary tree](../javascript/401-code-challenges/trees/__tests__/fizz-buzz.test.js)
- [code challenge 26 - sorting insertion](../javascript/401-code-challenges/sorting/__tests__/insert.test.js)
- [code challenge 27 - merge sort](../javascript/401-code-challenges/sorting/__tests__/merge.test.js)
- [code challenge 30 - hash tables](../javascript/401-code-challenges/hash-tables/hash-tables.test.js)
- [code challenge 31 - hashmap repeated word](../javascript/401-code-challenges/hashmap-repeated-word/hashmap.test.js)
- [code challenge 32 - tree intersection](../javascript/401-code-challenges/tree-intersection/tree-intersection.test.js)
- [code challenge 33 - hashmap left join](../javascript/401-code-challenges/hashmap-leftJoin/hashmap-leftJoin.test.js)
- [code challenge 35-38 - graphs](../javascript/401-code-challenges/graph/graph.test.js)

### Code challenges TOC

- [code challenge 1 - array reverse](../javascript/401-code-challenges/array-reverse/README.md)
- [code challenge 2 - array insert shift](../javascript/401-code-challenges/array-insert-shift/README.md)
- [code challenge 3 - array binary search](../javascript/401-code-challenges/array-binary-search/README.md)
- [code challenge 4 - Mock interview]
- [code challenge 5-8 - linked list](../javascript/linked-list/README.md)
- [code challenge 9 - Mock interview]
- [code challenge 10-13 - stack and queue](../javascript/401-code-challenges/stack-and-queue/README.md)
- [code challenge 14 - Mock interview]
- [code challenge 15 - Trees and K-ary Trees](../javascript/401-code-challenges/trees/README.md)
- [code challenge 16 - Binary tree max value](../javascript/401-code-challenges/trees/README.md)
- [code challenge 17 - Binary tree breadth first](../javascript/401-code-challenges/trees/README.md)
- [code challenge 18 - Fizz Buzz K-ary tree](../javascript/401-code-challenges/trees/README.md)
- [code challenge 26 - sorting insertion](../javascript/401-code-challenges/sorting/README.md)
- [code challenge 27 - merge sort](../javascript/401-code-challenges/sorting/README.md)
- [code challenge 30 - hash tables](../javascript/401-code-challenges/hash-tables/README.md)
- [code challenge 31 - hashmap repeated word](../javascript/401-code-challenges/hashmap-repeated-word/README.md)
- [code challenge 32 - tree intersection](../javascript/401-code-challenges/tree-intersection/README.md)
- [code challenge 33 - hashmap left join](../javascript/401-code-challenges/hashmap-leftJoin/README.md)
- [code challenge 34 - Mock interview]
- [code challenge 35-38 - graphs](../javascript/401-code-challenges/graph/README.md)
