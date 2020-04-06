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

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let position in sentence) {
    var letter = sentence[position];
    if(results[letter] && letter !== " "){
      results[letter].push(position);
    } else {
      results[letter] = [position];
    }
  }
  return results;
};


// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("exmaple text"));
