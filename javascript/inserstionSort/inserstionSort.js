
function inserstionSort(arr) {
    let n = arr.length;
    let temp;
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i; j < n; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  module.exports= inserstionSort