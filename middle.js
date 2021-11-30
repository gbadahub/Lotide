
const middle = function(array) {
    
    let newArr = []
    // eq checks length of array  by 2
    let middleCal = array.length/2
    // checks if array is even and if array is greater than 3
    if (!array.length%2 === 0 && array.length>2){
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

module.exports = middle;

