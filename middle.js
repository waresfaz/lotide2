const eqArray = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    return midIndex = [array[Math.floor(array.length / 2)]]
  } else return [array[midIndex - 1], array[midIndex]]
}


module.exports = middle;