// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
  firstName: 'Bob',
  age: 31,
};

const items = [
  { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
  { firstName: 'John', lastName: 'Smith', age: 25 },
  { firstName: 'Bob', lastName: 'Smith', age: 27 },
  { firstName: 'Bob', lastName: 'White', age: 31 },
];

// return a new list of objects containing the same key pair values
const output = [
  { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
  { firstName: 'Bob', lastName: 'White', age: 31 },
];

function search(arr, obj) {
  const keys = Object.keys(obj);
  console.log(keys);
  let result = arr.filter((x) => {
    for (i = 0; i < keys.length; i++) {
      //   console.log('Object:', obj[keys[i]]);
      //   console.log('X:', x[keys[i]]);
      if (obj[keys[i]] !== x[keys[i]]) {
        return false;
      }
    }
    return true;
  });
  return result;
}

console.log(search(items, searchFor));
