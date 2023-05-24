const LinkedList = require('.');

let ZipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  let newList = new LinkedList();
  newList.head = current1 || current2;

  let temp;
  while (current1 || current2) {
    if (current1) {
      temp = current1.next;
      if (current2) current1.next = current2;
      current1 = temp;
    }
    if (current2) {
      temp = current2.next;
      if (current1) current2.next = current1;
      current2 = temp;
    }
  }
  return newList;
};



module.exports = { ZipLists} ;
