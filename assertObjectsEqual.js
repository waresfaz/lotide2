const eqObjects = function(objectOne, objectTwo) {
  var propertiesOne = Object.getOwnPropertyNames(objectOne); // ['a', 'b']
  var propertiesTwo = Object.getOwnPropertyNames(objectTwo); // ['a', 'b']
  if (!eqArrays(propertiesOne, propertiesTwo)) {
    return false; //usse eqArray to check if each array is same. if true must go to next condition
  } 
  for (var i = 0; i < propertiesOne.length; i++){
    var propertyName = propertiesOne[i]; //e.g. propertiesOne[0] = 'a';
    var objectOneValue = objectOne[propertyName];
    var objectTwoValue = objectTwo[propertyName];

    if (Array.isArray(objectOneValue) && Array.isArray(objectTwoValue)) {
      if(!eqArrays(objectOneValue, objectTwoValue)) {
        return false;
      }
    } else if (objectOneValue !== objectTwoValue){
        return false;
    }
  }
  return true;
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i <= arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      } 
    } return true; // if this was line above, after  first iteration it would return true and stop looping. Must be outside of if statement block to loop to end.
  }
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true){
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑 🛑 🛑 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const name = {a: 1, b: [3, 4]};
const age = {a: 1, b: [4, 3]};


assertObjectsEqual(name, age);