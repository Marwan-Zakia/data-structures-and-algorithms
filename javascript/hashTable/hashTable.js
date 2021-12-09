"use strict";
class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  add(key, value) {
    let index = this.getHash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }
  get(key, value=null) {
    let index = this.getHash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          if (this.table[index].length > 1) {
            if (!value) {
              return this.table[index];
            }
            for (let j = 0; j < this.table[index].length; j++) {
              if (this.table[index][j][1] === value) {
                return this.table[index][j][1];
              }
            }
          }
          return this.table[index][i][1];
        }
      }
    }
  }
  contains(key) {
    let index = this.getHash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }
  getHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
}
module.exports = Hashtable;