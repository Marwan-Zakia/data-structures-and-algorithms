
function inserstionSort(arr) {
    let n = arr.length;
    let temp;
    for (let i = 0; i < n; i++) {
      let min = i;
      //the i is the sorted
      for (let j = i; j < n; j++) {
        if (arr[j] < arr[min]) { //edge case                                 
          min = j;
        }
      }
      // console.log('----- ----- ----------');
      // console.log('t',temp);
      temp = arr[min];
      // console.log('before',arr[min]);
      // console.log('value i',arr[i]);
      // console.log('i',i);
      arr[min] = arr[i];
      // console.log('[i]',arr[i]);
      arr[i] = temp;
      // console.log('after',temp);
    }
  }
  let array=[8,4,70,88]
  inserstionSort(array)
console.log(array)
  module.exports= inserstionSort