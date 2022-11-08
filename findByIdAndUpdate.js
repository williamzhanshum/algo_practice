// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const obj = {
  admin_level: 1000000,
  name: 'student 1 million',
  isLateToday: true,
};

const id = 1;

const students = [
  {
    id: 1,
    name: 'student1',
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: 'student2',
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: 'student3',
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

function findByIdAndUpdate(findId, obj, arr) {
  for (key in obj) {
    for (i of arr) {
      if (i['id'] == findId) {
        if (i[key] != undefined) {
          i[key] = obj[key];
        }
      }
    }
  }
  //   console.log(arr);
  return arr.filter((x) => {
    if (x['id'] == id) {
      return true;
    } else return false;
  })[0];
}

console.log(findByIdAndUpdate(id, obj, students));
