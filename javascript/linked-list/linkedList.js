'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;


    class LinkedList {
      constructor() {
        this.head = null;
      }

      // add node to the end
      add(value) {
        // create a new node
        const node = new Node(value);

        //assign node to the head, if no head, assign new node to head property
        if (!this.head) {
          this.head = node;
          return;
        }
        // transversing the linked list, add new node to end
        let current = this.head;

        // current.next, null will reassign new node
        while (current.next) {
          current = current.next
        }

        // next is now null, reassign new node
        current.next = node

      }


      // always transverse from head
      traverse() {
        let current = this.head;
        while (current) {
          // when transversing, console.log it
          console.log(current.value)
          current = current.next
        }
      }

    }
  }
}


let list = new LinkedList
  ();
console.log('empty list', list);

// adding head to list
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);


console.log('populated list', list);
list.traverse();

