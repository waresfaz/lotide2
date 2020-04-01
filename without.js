const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } else {
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  }
}

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
}

const without = function(source, itemsToRemove) {
  return source.filter(function(item) {
    if (itemsToRemove.includes(item)) {
      return false;
    } else {
      return true;
    }
  });
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]