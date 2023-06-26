'use strict';


class Hashtable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let entry of this.table[index]) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let entry of this.table[index]) {
      if (entry[0] === key) {
        return entry[1];
      }
    }
    return undefined;
  }

  has(key) {
    const index = this._hash(key);
    if (!this.table[index]) {
      return false;
    }
    for (let entry of this.table[index]) {
      if (entry[0] === key) {
        return true;
      }
    }
    return false;
  }

  keys() {
    const keys = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let entry of bucket) {
          keys.push(entry[0]);
        }
      }
    }
    return keys;
  }

  hash(key) {
    return this._hash(key);
  }
}


module.exports = { Hashtable };
