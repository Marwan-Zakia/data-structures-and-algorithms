function reverseArray (array){
    let newArr =[];
    for (let i = array.length-1;i>-1;i--){
      newArr.push(array[i])
    }
    
    return newArr
    } 
     console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));
     console.log(reverseArray([1,2,3,4,5,6,7]));
     
     
    
    