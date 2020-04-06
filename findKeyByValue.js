const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj)
  // console.log(keys);
  // console.log(obj[keys[1]]);

  for (let i of keys) {
    // console.log(i, obj[i]);
    if (obj[i] === value) {
      return i;
    }
  }
  return undefined
  
}

