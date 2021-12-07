'use strict';
function mergeSort(array){
    let n = array.length;
    if(n>1){
      let mid = Math.floor(n/2);
      let left = array.slice(0, mid);
      let right = array.slice(mid);
      mergeSort(left);
      mergeSort(right);
      merge(left, right, array);
    }
    return array;
  }
  function merge(left, right, array){
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < left.length && j < right.length){
      if(left[i] <= right[j]){
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      k++;
    }
    if(i === left.length) {
      while(k < array.length){
        array[k] = right[j];
        j++;
        k++;
      }
    } else {
      while(k < array.length){
        array[k] = left[i];
        i++;
        k++;
      }
    }
  }
  module.exports=mergeSort
