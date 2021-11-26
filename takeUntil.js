// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value



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

const takeUntil = function(array, callback) {
  let data = []
  for (const element of array){
    if (callback(element)) {
      return data;
    }
    data.push(element)
  }
  
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

(console.log(results2));

 


// Testing:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // output: [ "I've", 'been', 'to', 'Hollywood' ]

console.log('---');

assertArraysEqual((results1.length), (data1.length)); // returns True because 'length' is only 1 value long
assertArraysEqual(results1, data1); // returns False because arrays are not the same