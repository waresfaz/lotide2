const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const finalObject = {}
    const itemsToCountKeys = Object.keys(itemsToCount) // holds array of keys from object
    for (name of itemsToCountKeys) {
      // console.log(name);
      if (itemsToCount[name]) {
        // const newList = [];
        // for (item of allItems) {
        //   if (item === name) {
        //     newList.push(item);
        //   }
        // }
        const filteredArray = allItems.filter(word => name === word);
        // console.log(filteredArray);
        // console.log(allItems.filter(word => name === word));
        if (filteredArray.length > 0) {
          finalObject[name] = filteredArray.length;
        }
      // console.log(filteredArray);
      // console.log(allItems);
      }
    }
    return finalObject;
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);
console.log("-----");
assertEqual(result1["Jason"], 1);
console.log("-----");
assertEqual(result1["Karima"], undefined);
console.log("-----");
assertEqual(result1["Fang"], 2);
console.log("-----");