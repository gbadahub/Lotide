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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i <= source.length - 1; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]) )// => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) 