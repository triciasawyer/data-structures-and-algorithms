'use strict';


function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }
  for (let j = sorted.length - 1; j >= i; j--) {
    let temp = sorted[j];
    sorted[j] = value;
    value = temp;
  }
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}
