const assertEqual = function(actual, expected) {
  if (actual === expected){
    console. log ( `Assertion Passed: ${actual} === ${expected} `)
  } else {
    console.log (`❌Assertion Failed: ${actual} !== ${expected} ` )
  }
};


const findKeyByValue = function (object, value){
 for(const keyName in object){
   
   if (value === object[keyName]){
     return keyName;
   } 
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);