const assertEqual = function(actual, expected) {
  if (actual === expected){
    console. log ( `✅Assertion Passed: ${actual} === ${expected} `)
  } else {
    console.log (`❌Assertion Failed: ${actual} !== ${expected} ` )
  }
};


const findKey =  function(object, callBack){
for(const keyName in object){
  if (callBack(object[keyName])){
    return keyName
  }
  }
}

const answer = (findKey( {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, 
x => x.stars === 2), "noma")

//testing 
assertEqual(answer, "noma")