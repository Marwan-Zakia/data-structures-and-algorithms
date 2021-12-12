"use strict";
const hashtable = require("./hashTable");

// function repeatedWord(str) {
//   let newht = new hashtable(500);
//   let splted = str.split(" ");
//   for (let i = 0; i < splted.length; i++) {
//     let index = newht.getHash(splted[i]);

//     if (newht.table[index]) {
//       newht.table[index][0][1] += 1;
//     } else newht.add(splted[i], 1);
//   }
//   let key;
//   let max = 0;
//   for (let i = 0; i < splted.length; i++) {

//     if (newht.get(splted[i])>max) {
//         key=splted[i]
//         max =newht.get(splted[i])
//     }

// }
//   return key
// }
function repeatedWord(str) {
  let newht = new hashtable(1024);
  let splted = str.toLowerCase().replace(/[^((a-z)& )]/gm, "").split(" ");
  console.log(splted);
  for (let i = 0; i < splted.length; i++) {
    let index = newht.getHash(splted[i]);
    if (newht.table[index]) {
      return splted[i];
    } else newht.add(splted[i], 1);
  }
}

module.exports = repeatedWord;

