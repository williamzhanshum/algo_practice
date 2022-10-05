// Printing a block of #'s
// let output = '';

// for (i = 0; i < 4; i++) {
//   for (j = 0; j < 4; j++) {
//     output += '#';
//   }
//   output += '\n';
// }
// console.log(output);

// // Mario Pyramid challenge:
// function mario(height) {
//   let output = '';

//   for (i = 0; i < height; i++) {
//     for (space = 0; space < height - i - 1; space++) {
//       output += ' ';
//     }
//     for (j = 0; j <= i; j++) {
//       output += '#';
//     }
//     output += '  ';
//     for (col = 0; col <= i; col++) {
//       output += '#';
//     }
//     output += '\n';
//   }
//   console.log(output);
// }
// mario(4);

// Integer Sum Challenge #1:
// function solution(n, arr) {
//   let b = [];
//   let sum = 0;
// }

// let count = 0;

// for (i = 0; i < sequence.length; i++) {
//   if (sequence[i] < sequence[i - 1]) {
//     count++;
//   }
//   if (count > 1) {
//     return false;
//   }
//   return true;
// }

// function soultion(arr) {
//   let resArr = [];

//   let longest = '';
//   for (let i = 0; i < arr.length; i++) {
//     if (longest.length < arr[i].length) {
//       longest = arr[i];
//     }
//   }

//   for (let w = 0; w < longest.length; w++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (w < arr[i].length) {
//         resArr.push(arr[i][w]);
//       }
//     }
//   }

//   return resArr.join('');
// }

// arr = ['Matilda', 'Justin', 'William'];
// soultion(arr);

// Practice Test Challenge #1
// function solution(arr) {
//   let output = [];

//   for (i = 0; i < arr.length - 2; i++) {
//     if (
//       (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) ||
//       (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2])
//     ) {
//       output.push(1);
//     } else {
//       output.push(0);
//     }
//   }
//   console.log(output);
//   return output;
// }

// const arr = [1, 2, 1, 3, 4];

// solution(arr);

///////////////////////////////////////////////////////////////////////////////

// Practice Test Challenge #2
// example: [25, 2, 3, 57, 38, 41]
/*
1) Convert array of numbers into strings (probably dont need this step)
2) Join string into one whole string (allows to iterrate through each character)
4) Create hash map 
  a. key: number 
     value: # of occurance
5) Loop through array to count the freqencies
6) Loop through hash 
  a. get the key(s) w/ highest value 
    i. Loop to find the max value 
  b push the keys w/ most occurances to a new array 
7) Sort array in ascending order and return. 
*/

// let a = [122, 5555, 69, 4444, 3, 453];

// function solution(a) {
//   let strA = a.join('');
//   let output = [];
//   let map = {};

//   // Loop through the string to find the frequency of each digit
//   for (i = 0; i < strA.length; i++) {
//     if (map[strA[i]]) {
//       map[strA[i]] += 1;
//     } else {
//       map[strA[i]] = 1;
//     }
//   }

//   // Loop through keys of map to find the highest count
//   let keys = Object.keys(map);
//   let maxValue = 0;
//   for (i = 0; i < keys.length; i++) {
//     if (maxValue < map[keys[i]]) {
//       maxValue = map[keys[i]];
//     }
//   }

//   // Loop through map to find the keys that equal the maxValue and push into array
//   for (i = 0; i < keys.length; i++) {
//     if (map[keys[i]] === maxValue) {
//       output.push(keys[i]);
//     }
//   }

//   // Sort output array
//   let numArr = output.sort((a, b) => a - b).map(Number); // Returns the correct array, but as strings instead of numbers.
//   console.log(numArr);
// }

// solution(a);

///////////////////////////////////////////////////////////////////////////////

// Practice Test #1:
/* Steps: 
1. Set an empty array variable. 
2. Loop through array to find the value of x
 */
/*
function solution3(numbers, left, right) {
  let output = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = 1; j < right; j++) {
      if (numbers[i] === (i + 1) * j && j <= left && j >= right) {
        output.push(true);
      } else output.push(false);
    }
  }
  console.log(output);
  return output;
}

const numbers = [8, 5, 6, 16, 5];
const left = 1;
const right = 3;

solution3(numbers, left, right);
*/
///////////////////////////////////////////////////////////////////////////////
/*
// Count Positives
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
let positiveNums = function (arr) {
  var countPositives = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositives++;
    }
  }
  console.log('there are ' + countPositives + ' positive values');
};

positiveNums(numbers);
*/

// //take in array as parameter
// //reverse it "in place"
// //return the reversed array
// function reverse(arr) {
//   //cannot create new array!!!
//   let temp = 0;
//   let j = arr.length -1;
// for (i = 0; i < arr.length /2; i++, j--){
//   temp = arr[i];
//   arr[i] = arr[j]
//   arr[j] = temp
//   return arr;
// }

// console.log(reverse(['a', 'b', 'c', 'd', 'e']));
/*
var x = 0;
for (var i = 1; i < 5; i++) {
  x += i;
  console.log(x);
}
console.log(x);
*/

/*
// Roll a die and output randomly 1-6
// return that random number, no decimals!
function d6() {
  let dieNum = Math.floor(Math.random() * 6 + 1);
  return dieNum;
}

console.log(d6());

// Consult the Oracle
function eightBall() {
  var lifesAnswers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes – definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
  ];
  var i = Math.floor(Math.random() * lifesAnswers.length);
  return lifesAnswers[i];
}

console.log(eightBall());

var taco1 = {
  tortilla: 'soft corn tortilla',
  protein: 'tinga chicken',
  cheese: 'cotija cheese',
  toppings: ['lettuce', 'pico de gallo', 'guacamole'],
  tacoInfo: function () {
    console.log('Tortilla: ' + this.tortilla);
    console.log('Protein:  ' + this.protein);
    console.log('Cheese:   ' + this.cheese);
    console.log('Toppings: ' + this.toppings);
  },
};

// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function
*/

/*
// Week 2 - Day 3
var pokemon = [
  { id: 1, name: 'Bulbasaur', types: ['poison', 'grass'] },
  { id: 5, name: 'Charmeleon', types: ['fire'] },
  { id: 9, name: 'Blastoise', types: ['water'] },
  { id: 12, name: 'Butterfree', types: ['bug', 'flying'] },
  { id: 16, name: 'Pidgey', types: ['normal', 'flying'] },
  { id: 23, name: 'Ekans', types: ['poison'] },
  { id: 24, name: 'Arbok', types: ['poison'] },
  { id: 25, name: 'Pikachu', types: ['electric'] },
  { id: 37, name: 'Vulpix', types: ['fire'] },
  { id: 52, name: 'Meowth', types: ['normal'] },
  { id: 63, name: 'Abra', types: ['psychic'] },
  { id: 67, name: 'Machamp', types: ['fighting'] },
  { id: 72, name: 'Tentacool', types: ['water', 'poison'] },
  { id: 74, name: 'Geodude', types: ['rock', 'ground'] },
  { id: 87, name: 'Dewgong', types: ['water', 'ice'] },
  { id: 98, name: 'Krabby', types: ['water'] },
  { id: 115, name: 'Kangaskhan', types: ['normal'] },
  { id: 122, name: 'Mr. Mime', types: ['psychic'] },
  { id: 133, name: 'Eevee', types: ['normal'] },
  { id: 144, name: 'Articuno', types: ['ice', 'flying'] },
  { id: 145, name: 'Zapdos', types: ['electric', 'flying'] },
  { id: 146, name: 'Moltres', types: ['fire', 'flying'] },
  { id: 148, name: 'Dragonair', types: ['dragon'] },
];

// 1.console.log the pokémon objects whose id is evenly divisible by 3
console.log('----- #1 -----');
for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].id % 3 == 0) {
    console.log(pokemon[i].name);
  }
}

// 2.console.log the pokémon objects that have more than one type
console.log('----- #2 -----');
for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length >= 2) {
    console.log(pokemon[i]);
  }
}

// 3.console.log the names of the pokémon whose only type is "poison"
console.log('----- #3 -----');
for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length == 1 && pokemon[i].types[0] == 'poison') {
    console.log(pokemon[i].name);
  }
}

// 4.console.log the first type of all the pokémon whose second type is "flying"
console.log('----- #4 -----');
for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types[1] === 'flying') {
    console.log(pokemon[i].types[0]);
  }
}

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type  is "poison"
console.log('----- Bonus -----');
for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length == 1 && pokemon[i].types[0] == 'poison') {
    console.log(pokemon[i].name.split('').reverse().join(''));
  }
}

// Week 2 - Day 4
var nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var moreNums = [
  [1, 2, 3, 4, 5, 6],
  [2, 7, 4, 1, 5, 5],
];

function printAll2d(arr2d) {}
// printAll2d(nums);
// printAll2d(moreNums);

function flatten(arr2d) {
  var flat = [];
  //your code here
  for (i = 0; i < arr2d.length; i++) {
    for (j = 0; j < arr2d[i].length; j++) {
      flat.push(arr2d[i][j]);
    }
  }
  return flat;
}

const arr = [1, 2, 3, 4, 5];

console.log(flatten(nums));
console.log(flatten(moreNums));
*/

// Hacker Rank - Ransome Note
function checkMagazine(magazine, note) {
  /*
  magazine = "give me one grand today night"
  note = "give one grand today"
  key: word 
  value: true 
  first initialize ransom = ture. We'll change it later depending on the conditions. 
  1. Loop through magazine: 
      a. If the word is in map set add value by 1
      b. else set value = 1
  2) Loop through note: 
      a. if the word is in map subract by one. 
  3) Loop through the keys of the map:
      a. If there is a value less than 0; set ransom to false
          - This means that the note has an one extra word that the magazine does not have. 
  4) if ransom = true, print yes. else, print no
  */
  let replicate = true;
  let map = {};

  // Step 1:
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]] += 1;
    } else {
      map[magazine[i]] = 1;
    }
  }

  // Step 2:
  for (let i = 0; i < note.length; i++) {
    if (map[note[i]]) {
      map[note[i]] -= 1;
    } else {
      map[note[i]] = -1;
    }
  }

  // Step 3:
  let keys = Object.keys(map); // return an arrays with keys of map.
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] < 0) {
      replicate = false;
    }
  }

  // Step 4:
  if (replicate) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

// map1 = { name: 'William', last: 'Zhan', age: 27 };
// keys = Object.keys(map1);
// console.log(keys);
// console.log(map1[keys[0]]);
// console.log(map1.name);
