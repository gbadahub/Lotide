const assertEqual = require('./assertEqual')

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

module.exports = assertEqual;
module.exports = eqArrays;