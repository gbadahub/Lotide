const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
     //i = 0, value = "1"
      if (array1[i] !== array2[i]) {
    } else {
      return true
    }
  }
  return false
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion Passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
  }
  };


const words = ["ground", "control", "to", "major", "tom"];

 const map = function (array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
 }
 return results
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results6 = map(words, word => word[0]);
console.log(results6); // returns [ 'g', 'c', 't', 'm', 't' ]
const results2 = map(words, word => word.length);
console.log(results2); // returns [ 6, 7, 2, 5, 3 ]
const results3 = map(words, word => word[word.length - 1]);
console.log(results3); // returns [ 'd', 'l', 'o', 'r', 'm' ]
const results4 = map(words, word => word);
console.log(results4); // returns [ 'ground', 'control', 'to', 'major', 'tom' ]
assertArraysEqual(results6, words); // returns False
assertArraysEqual(results4, words); // returns True