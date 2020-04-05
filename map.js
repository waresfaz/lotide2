const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


assertEqual(
  eqArrays([ 'g', 'c', 't', 'm', 't' ], map(words, word => word[0])
  ), true);
assertEqual(
  eqArrays([6,7,2,5,3], map(words, word => word.length)
  ), true);

/* the below block represent the longer version of  word => word[0]

const results1 = map(words, function(word){
  results.push(word[0]);
}); */