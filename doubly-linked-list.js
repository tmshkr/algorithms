/*
https://repl.it/@tmshkr/doubly-linked-list
*/
/** Class representing a Doubly Linked List */

class DoublyLinkedList {
  constructor(value) {
    const node = { value, prev: null, next: null };
    this.head = node;
    this.tail = node;
  }

  append(value) {
    const newNode = { value, prev: null, next: null };
    newNode.prev = this.tail;
    newNode.prev.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  insertAfter(node, value) {
    if (node === this.tail) return append(value);

    const newNode = { value, prev: null, next: null };
    newNode.prev = node;
    newNode.next = node.next;
    newNode.next.prev = newNode;
    node.next = newNode;
    return newNode;
  }

  remove(node) {
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    return node.value;
  }

  removeValue(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        this.remove(curr);
        return curr.value;
      }
      curr = curr.next;
    }
    return false;
  }

  reverse() {
    // start at head
    let curr = this.head;
    // switch head and tail
    this.head = this.tail;
    this.tail = curr;

    // A <-> B <-> C <-> D
    // D <-> C <-> B <-> A
    while (curr) {
      const next = curr.next;
      curr.next = curr.prev;
      curr.prev = next;
      curr = next;
    }

    return this;
  }

  contains(value) {
    let curr = this.head;
    while (curr.value !== value) {
      if (curr.next) curr = curr.next;
      else break;
    }
    return curr.value === value;
  }
}

const list = new DoublyLinkedList(1);
list.append(2);
list.append(3);
console.log(list);
console.log("************");
list.removeValue(2);
console.log(list);
console.log("list.contains(2):", list.contains(2));
console.log("************");
list.insertAfter(list.head, 2);
console.log(list);
console.log("list.contains(2):", list.contains(2));
console.log("************");
list.reverse();
console.log("reversed", list);
