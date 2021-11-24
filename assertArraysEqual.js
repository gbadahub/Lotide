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

assertArraysEqual([1, 2, 3], [1, 2, 3]);



