'use strict';


function breadthFirst(tree) {
  const queue = [tree];
  const result = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
}


module.exports = { breadthFirst };

