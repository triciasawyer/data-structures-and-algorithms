'use strict';


function insert(sorted, value) {
  let i = sorted.length - 1;
  while (i >= 0 && value < sorted[i]) {
    sorted[i + 1] = sorted[i];
    i--;
  }
  sorted[i + 1] = value;
}

function insertionSort(input) {
  if (input.length === 0) {
    return []; // Return an empty array if the input is empty
  }

  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}

module.exports = { insert, insertionSort };
