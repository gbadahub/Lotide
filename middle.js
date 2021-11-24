const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
     //i = 0, value = "1"
      if (array1[i] === array2[i]) {
    } else {
      return false
    }
  }
  return true
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log("They are the same");

  } else{
    console.log ("They are not true")
  }
  };

  const middle = function(array) {
    
    let newArr = []
    // eq checks length of array  by 2
    let middleCal = array.length/2
    // checks if array is even and if array is greater than 3
    if (array.length%2 === 0 && array.length>3){
    // set middleCal to new var for functionality
      let first = middleCal
    // push new array,array[first-1]= 3, array[first] = 4 
      newArr.push(array[first-1], array[first])
    // checks if array is greater than 2
    } else if (array.length > 2){
    // math.ceil rounds up to nearest whole number, so will round array up even
      let index = Math.ceil(middleCal)
    // push values to new array 
      newArr.push(array[index -1 ])
    }
   return newArr
  }
 console.log(middle([1, 2, 3])) // => [2]
/console.log(middle([1, 2, 3, 4, 5])) 
 console.log(middle([1]) )// => []
// middle([1, 2]) 
console.log(middle([1, 2, 3, 4, 5, 6])) 
  
// var array = [1,2,8,4,5];

