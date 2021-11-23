const assertEqual = function(actual, expected) {
  if (actual === expected){
    console. log ( "Assertion Passed: "+ [actual] + " === "+[expected] )
  } else {
    console.log ("❌Assertion Failed: " + [actual] + " !== "+[expected])
  }
};

// TEST CODE
assertEqual("rice", "rice");
assertEqual(1, 4);
