const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log("They are the same");

  } else{
    console.log ("They are not true")
  }
  };

  
module.exports = assertArraysEqual

 




