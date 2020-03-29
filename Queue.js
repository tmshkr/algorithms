/*
https://frontendmasters.com/courses/data-structures-interviews/queue-exercise/
https://repl.it/@tmshkr/queue-prompt
*/
/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this._storage = {};
    this.length = 0;
    this.first = 0;
    this.appendAt = 0;
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    this._storage[this.appendAt] = value;
    this.length++;
    this.appendAt++;
    return this;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    if (this.length) {
      const oldest = this._storage[this.first];
      delete this._storage[this.first];
      this.first++;
      this.length--;
      return oldest;
    }
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    return this._storage[this.first];
  }
}

const q = new Queue();
q.enqueue("zero");
q.enqueue("one");
console.log(q);
// {
// 	_storage: {0: "zero", 1: "one"}},
// 	length: 2
// }
console.log("************");
console.log("q.dequeue():", q.dequeue());
console.log(q);
// {
// 	_storage: {1: "one"}},
// 	length: 1
// }
console.log("************");
q.enqueue("two");
