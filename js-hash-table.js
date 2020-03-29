/*
https://frontendmasters.com/courses/data-structures-interviews/hash-table-usage-constructor-insert/
https://repl.it/@tmshkr/js-hash-table
*/
/** Class representing a Hash Table */

class HashTable {
  constructor(size) {
    this.size = size;
    this._storage = new Array(this.size);
  }

  /*
   * Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    const index = this._hash(key, this.size);
    let slot = this._storage[index];
    if (!slot) this._storage[index] = slot = [];
    slot.push([key, value]);
    return this;
  }
  /*
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove(key) {
    const index = this._hash(key, this.size);
    const slot = this._storage[index];
    if (!slot) return undefined;

    const foundIndex = slot.findIndex(tuple => tuple[0] === key);

    return foundIndex < 0 ? undefined : slot.splice(foundIndex, 1)[0][1];
  }
  /*
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    const index = this._hash(key, this.size);
    const slot = this._storage[index];
    if (!slot) return undefined;

    const foundIndex = slot.findIndex(tuple => tuple[0] === key);

    return foundIndex < 0 ? undefined : slot[foundIndex][1];
  }
  /*
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

const ht = new HashTable(10);
ht.insert("hello", "world");
ht.insert("foo", "bar");
console.log(ht);
console.log("************");
console.log(`ht.retrieve("foo"):`, ht.retrieve("foo"));
console.log(`ht.remove("foo"):`, ht.remove("foo"));
console.log(`ht.retrieve("foo"):`, ht.retrieve("foo"));
console.log("************");
console.log(ht);
