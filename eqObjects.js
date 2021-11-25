const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} `)

  }
};

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

const eqObjects = function (object1, object2) {
  // object. keys returns array of keys, object is passed in as parameter and, .length to check 
  if (Object.keys(object1).length === Object.keys(object2).length) {
  // for in loop 
    for (const key in object1) {
//Array.isArray() method determines whether the passed value is an Array.
      if (Array.isArray(object1) && Array.isArray(object2)) {
  // eqArrays checks if arrays are equal cause not primitive
        return eqArrays(object1, object2)
      } else {
  // checking if object values are true 
        if (object1[key] === object2[key]) {
        } else {
          return false
        }
      }
      return true
    }
  } else {
    return false
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true)