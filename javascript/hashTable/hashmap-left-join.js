"use strict";
const Hashtable = require("./hashTable");
function leftJoin(ht1, ht2) {
  let result = {};
  for (let key in ht1) {
    result[key] = [ht1[key]];
  }
  for (let key in ht2) {
    if (result[key]) {
      result[key].push(ht2[key]);
    } else {
      result[key] = [null, ht2[key]];
    }
  }
  return result;
}
module.exports = leftJoin;


