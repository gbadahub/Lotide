const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns return 2 ", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });

  it("returns r [0], which is l", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[2], "Labs");
  });
});


// // TEST CODE
// // Test Case 1: Check the returned array elements
 // ensure we get back two elements

// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs" 
