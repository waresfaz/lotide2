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

const middle = function(array) {
  result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    return midIndex = [array[Math.floor(array.length / 2)]]
  } else return [array[midIndex - 1], array[midIndex]]
}


// Test code
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]