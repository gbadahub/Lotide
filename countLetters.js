const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
  }
};

const countLetters = function (string) {
  const newObj = {}
  // .replace removes the space from the string and .split returns each invidual character as an array
  let str = string.replace(/\s+/g, '').split('')
  // letter now signifies each character in the loop 
  for (let letter of str) {
        if(!newObj[letter]){
          newObj[letter] = 1
        } else {
          newObj[letter] = newObj[letter] + 1
        }
    }
  return console.log(newObj)
}
countLetters("lighthouse in the house")

