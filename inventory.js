const newInv1 = [
  { name: 'Grain of Rice', quantity: 9000 },
  { name: 'Peanut Butter', quantity: 50 },
  { name: 'Royal Jelly', quantity: 20 },
];
const currInv1 = [
  { name: 'Peanut Butter', quantity: 20 },
  { name: 'Grain of Rice', quantity: 1 },
];
const expected1 = [
  { name: 'Peanut Butter', quantity: 70 },
  { name: 'Grain of Rice', quantity: 9001 },
  { name: 'Royal Jelly', quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: 'Peanut Butter', quantity: 20 }];
const expected2 = [{ name: 'Peanut Butter', quantity: 20 }];

const newInv3 = [{ name: 'Peanut Butter', quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: 'Peanut Butter', quantity: 20 }];

function convert(invArr) {
  keys = Object.keys(invArr);
  values = Object.values(invArr);
}
