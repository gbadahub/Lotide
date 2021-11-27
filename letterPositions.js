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


const letterPositions = function (sentence) {
  // empty array 
  const results = {};
  // for loop to go through sentence 
  for (let j = 0; j < sentence.length; j++) {
  // allows us to skip function 
    if (sentence[j] !== " "){
  // letter equal to word index 
    let letter = sentence[j]
  // this code checks if there is a key called letter 
    if (!results[letter]) {
  // creates letter key with to equal each indiviual character
      results[letter] = [j]
    } else {
  // if letter key already exists it is pushed into the appropricate object key
      results[letter].push(j) 
    }
  }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1]);


