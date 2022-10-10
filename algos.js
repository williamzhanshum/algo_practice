/*
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

/*
// Given an arr and a separator string, output a string of every item in the array separated by the separator.

// No trailing separator at the end
// Default the separator to a comma with a space after it if no separator is provided

const arr1 = [1, 2, 3];
const separator1 = ', ';
const expected1 = '1, 2, 3';

const arr2 = [1, 2, 3];
const separator2 = '-';
const expected2 = '1-2-3';

const arr3 = [1, 2, 3];
const separator3 = ' - ';
const expected3 = '1 - 2 - 3';

const arr4 = [1];
const separator4 = ', ';
const expected4 = '1';

const arr5 = [];
const separator5 = ', ';
const expected5 = '';

function combiner(arr, separator, check) {
  let newString = '';
  if (arr.join(separator) == check) {
    newString += arr.join(separator);
  } else {
    return 'Not a match';
  }
  return newString;
}
console.log('--- w/ join---');
console.log(combiner(arr1, separator1, expected1));
console.log(combiner(arr2, separator2, expected2));
console.log(combiner(arr3, separator3, expected3));
console.log(combiner(arr4, separator4, expected4));
console.log(combiner(arr5, separator5, expected5));

// w/o join method
function combiner2(arr, separator) {
  let newString = '';
  for (i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      newString += arr[i] + separator;
    } else {
      newString += arr[i];
    }
  }
  return newString;
}

console.log('--- w/o join---');
console.log(combiner2(arr1, separator1));
console.log(combiner2(arr2, separator2));
console.log(combiner2(arr3, separator3));
console.log(combiner2(arr4, separator4));
console.log(combiner2(arr5, separator5));

// Book Index
// Given an array of ints representing page numbers
// return a string with the page numbers formatted as page ranges when the nums
// span a consecutive range.

const nums1 = [1, 13, 14, 15, 37, 38, 70];
// const expected1 = '1, 13-15, 37-38, 70';

const nums2 = [5, 6, 7, 8, 9];
// const expected2 = '5-9';

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
// const expected3 = '1-3, 7, 9, 15-17';

function pageNumbers(arr) {
  var str = '';
  for (i = 0; i < arr.length; i++) {
    str += arr[i];
    if (arr[i] == arr[i + 1] - 1) {
      while (arr[i] == arr[i + 1] - 1) {
        i++;
      }
      str += '-' + arr[i];
    }
    if (i < arr.length - 1) {
      str += ', ';
    }
  }
  return str;
}

console.log(pageNumbers(nums6));
console.log(pageNumbers(nums7));
console.log(pageNumbers(nums8));
*/

/*
// Good W1D3 Morning,

// Problems for today: 1- Encode String and 2- Decode String!

// Encode string:
//   Given in an alumni interview in 2021.
//   String Encode
//   You are given a string that may contain sequences of consecutive characters.
//   Create a function to shorten a string by including the character,
//   then the number of times it appears.

//   If final result is not shorter (such as "bb" => "b2" ),
//   return the original string.

const str1 = 'aaaabbcddd';
const expected1 = 'a4b2c1d3';

const str2a = '';
const expected2 = '';

const str3 = 'a';
const expected3 = 'a';

const str4 = 'bbcc';
const expected4 = 'bbcc';

// With hash map:
// key: the letter, and value = count

// function encode2(str){
//   let map = {};
//   for(i = 0; i < str.length; i++){
//     if( str[i] != )
//   }
// }

function encode(str) {
  var newStr = '';
  for (i = 0; i < str.length; i++) {
    let counter = 1;
    if (str[i + 1] === str[i]) {
      while (str[i + 1] == str[i]) {
        i++;
        counter++;
      }
    }
    newStr += str[i] + counter;
  }
  if (str.length <= newStr.length) {
    return str;
  }
  return newStr;
}

// console.log(encode(str1));
// console.log(encode(str2));
// console.log(encode(str3));
// console.log(encode(str4));

// String Decode
//  * Decodes the given string by duplicating each character by the following int
//  * amount if there is an int after the character

const strA = 'a3b2c1d3';
const expectedA = 'aaabbcddd';

const strB = 'a3b2c12d10';
const expectedB = 'aaabbccccccccccccdddddddddd';

function decode(str) {
  newStr = '';
  for (i = 0; i < str.length; i++) {
    if (
      Number.isInteger(parseInt(str[i])) ||
      (Number.isInteger(parseInt(str[i])) &&
        Number.isInteger(parseInt(str[i + 1])))
    ) {
      for (j = 0; j < str[i] + str[i + 1]; j++) {
        newStr += str[i - 1];
      }
    }
  }
  return newStr;
}

console.log(decode(strA));
console.log(decode(strB));
*/

/*
// Good Morning W1D4  Ninjas!

// Today's algo problems:

// Problem1:

// /
//   String: Is Palindrome
//   Create a function that returns a boolean whether the string is a strict palindrome.
//     - palindrome = string that is same forwards and backwards

//   Do not ignore spaces, punctuation and capitalization
// Problem 1:
const str1 = 'a x a';
const expected1 = true;

const str2 = 'racecar';
const expected2 = true;

const str3 = 'Dud';
const expected3 = false;

const str4 = 'oho!';
const expected4 = false;

function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));

// ----------------------------------------------

// Problem2:
//   Longest Palindrome
//   For this challenge, we will look not only at the entire string provided,
//   but also at the substrings within it.
//   Return the longest palindromic substring.
//   Strings longer or shorter than complete words are OK.
//   All the substrings of "abc" are:
//   a, ab, abc, b, bc, c

// const { isPalindrome } = require('../isPalindrome');

const strA = 'what up, daddy-o?';
const expectedA = 'dad';

const strB = 'uh, not much';
const expectedB = 'u';

const strC = 'Yikes! my favorite racecar erupted!';
const expectedC = 'e racecar e';

const strD = 'a1001x20002y5677765z';
const expectedD = '5677765';

const str5 = 'a1001x20002y567765z';
const expected5 = '567765';

// 1. Create an empty array
// 2. Loop through the inout string and looks for substring palindromes
//3. Push the substring palindromes into the new array
// 4. Loops throught he new array:
//  a. compare the length of each array
//  b. return the element with the longest length.

function longestPal(str) {
  let saved_string = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > 0; j--) {
      // console.log(str.slice(i, j));
      let temp_str = str.slice(i, j);
      // console.log(temp_str);
      if (isPalindrome(temp_str)) {
        // console.log(`temp: ${temp_str}, save: ${saved_string}`);
        if (saved_string.length < temp_str.length) {
          saved_string = temp_str;
        }
      }
    }
  }
  return saved_string;
}

longestPal(strA);
*/

/*
// Creating a map from two arrays
function swap(arr1, arr2) {
  let map = {};

  if (arr1.length < arr2.length) {
    return 'Not enough keys to pair with the values to pair';
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.length > i) {
      map[arr1[i]] = arr2[i];
    } else {
      map[arr1[i]] = '';
    }
  }
  return map;
}

// Part 2: reverse the keys and pairs in the map.
function reverseMap(map) {
  let keys = Object.keys(map); // returns an array of the keys from the map
  let values = Object.values(map);

  return swap(values, keys);
}

// without using the object.keys or objects.values
function new_function(hash_map) {
  let keys = [];
  let values = [];
  for (let key in hash_map) {
    let value = hash_map[key];
    keys.push(key);
    values.push(value);
  }
  return hash(values, keys);
}

arr1 = ['a', 'b', 'c'];
arr2 = [1, 2, 3];

arr3 = ['1', '2', '3', '4'];
arr4 = [1, 2];

const map1 = {
  name: 'John',
  age: '37',
  faveFood: 'pizza',
  hometown: 'San Jose',
  color: 'blue',
  pet: 'dog',
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(swap(arr3, arr4));
console.log(swap(arr1, arr2));
console.log(reverseMap(map1));
*/

/* 
  // Given an array of strings
  // return the number of times each string occurs (a frequency / hash table)


const arr1 = ['a', 'a', 'a'];
const expected1 = {
  a: 3,
};

const arr2 = ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd'];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

// Problem 1:
function occurances(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }
  return map;
}
// console.log(occurances(arr1));
// console.log(occurances(arr2));

// Problem 2:
// Given a non-empty array of odd length containing ints where every int but one
// has a matching pair (another int that is the same)
// return the only int that has no matching pair.

const nums1 = [1];
const expecteda = 1;

const nums2 = [5, 4, 5];
const expectedb = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expectedc = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedd = 1;

function leftOver(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }

  let keys = Object.keys(map);
  for (let j = 0; j < keys.length; j++) {
    if (map[keys[j]] % 2) {
      return keys[j];
    }
  }
}

console.log(leftOver(nums1));
console.log(leftOver(nums2));
console.log(leftOver(nums3));
console.log(leftOver(nums4));

// Problem 3:
//   Given a string,
//   return a new string with the duplicates excluded
//   Bonus: Keep only the last instance of each character.
const str1 = 'abcABC';
const expected1a = 'abcABC';

const str2 = 'helloo';
const expected2b = 'helo';

const str3 = '';
const expected3c = '';

const str4 = 'aa';
const expected4d = 'a';

function checkDuplicates(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      map[str[i]] += 1;
    } else {
      map[str[i]] = 1;
    }
  }

  let newStr = '';
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    newStr += keys[i];
  }
  return newStr;
}
console.log(checkDuplicates(str1));
console.log(checkDuplicates(str2));
console.log(checkDuplicates(str3));
console.log(checkDuplicates(str4));
*/

/*
// ----1st  question:-------
//   Reverse Word Order
//   Given a string of words (with spaces)
//   return a new string with words in reverse sequence.

const str1 = 'This is a test';
const expected1 = 'test a is This';

const str2 = 'hello';
const expected2 = 'hello';

const str3 = '   This  is a   test  ';
const expected3 = 'test a is This';

function reverse(str) {
  words = str.split(' ');
  newStr = '';

  for (var i = words.length - 1; i >= 0; i--) {
    if (words[i].trim().length === 0) {
      continue;
    } else {
      newStr += words[i] + ' ';
    }
  }
  return newStr;
}

console.log(reverse(str1));
console.log(reverse(str2));
console.log(reverse(str3));

// ----------Question 2:-----------
// Parens Valid
// Given an str that has parenthesis in it
// return whether the parenthesis are valid

const strA = 'Y(3(p)p(3)r)s';
const expectedA = true;

const strB = 'N(0(p)3';
const expectedB = false;
// Explanation: not every parenthesis is closed.

const strC = 'N(0)t ) 0(k';
const expectedC = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const strD = 'a(b))(c';
const expectedD = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

// Solution 1:
function parenthesis(str) {
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') counter1++;
    if (str[i] == ')') counter2++;
  }
  if (counter1 / counter2 == 1) {
    return true;
  } else return false;
}

// Solution 2:
function checkperent(str) {
  let counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      counter++;
    } else if (str[i] == ')') {
      counter--;
      if (counter < 0) {
        return false;
      }
    }
  }
  if (counter == 0) {
    return true;
  } else {
    return false;
  }
}

// -----------Question 3 :------------
// Braces Valid
// Given a string sequence of parentheses, braces and brackets, determine whether it is valid.

const str1a = 'W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!';
const expected1a = true;

const str2a = 'D(i{a}l[ t]o)n{e';
const expected2a = false;

const str3a = 'A(1)s[O (n]0{t) 0}k';
const expected3b = false;

function valid3(str) {
  checker = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
      checker.push(str[i]);
    }
    if (str[i] == ')' && checker[checker.length - 1] == '(') {
      if (checker.pop(str[i]) != '(') {
        return false;
      }
    }
    if (str[i] == '}' && checker[checker.length - 1] == '{') {
      if (checker.pop(str[i]) != '{') {
        return false;
      }
    }
    if (str[i] == ']' && checker[checker.length - 1] == '[') {
      if (checker.pop(str[i]) != '[') {
        return false;
      }
    }
  }
  if (checker.length) {
    return false;
  } else {
    return true;
  }
}

console.log(valid3(str1a));
console.log(valid3(str2a));
console.log(valid3(str3a));
*/

/*
// -----problem 1 ---------
//   String: Rotate String
//   Create a standalone function that accepts a string and an integer,
//   and rotates the characters in the string to the right by that given
//   integer amount.

const str = 'Hello World';

const rotateAmnt1 = 0;
const expected1 = 'Hello World';

const rotateAmnt2 = 1;
const expected2 = 'dHello Worl';

const rotateAmnt3 = 2;
const expected3 = 'ldHello Wor';

const rotateAmnt4 = 4;
const expected4 = 'orldHello W';

const rotateAmnt5 = 13;
const expected5 = 'ldHello Wor';

function rotateStr(str, int) {
  newStrEnd = str.slice(str.length - int, str.length);
  newStrStart = str.slice(0, str.length - int);

  return newStrEnd + newStrStart;
}

// console.log(rotateStr(str, rotateAmnt1));
// console.log(rotateStr(str, rotateAmnt2));
// console.log(rotateStr(str, rotateAmnt3));
// console.log(rotateStr(str, rotateAmnt4));
// console.log(rotateStr(str, rotateAmnt5));

// ---------- Problem # 2-------------
//   Create the function isRotation(str1,str2) that
//   returns whether the second string is a rotation of the first.

const strA1 = 'ABCD';
const strB1 = 'CDAB';
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1a = true;

const strA2 = 'ABCD';
const strB2 = 'CDBA';
// Explanation: all same letters in 2nd string, but out of order
const expected2a = false;

const strA3 = 'ABCD';
const strB3 = 'BCDAB';
// Explanation: same letters in correct order but there is an extra letter.
const expected3a = false;

// Solution 1:
function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[0]) {
      if (rotateStr(str1, i) === str2) {
        return true;
      }
    } else {
      continue;
    }
  }
  return false;
}

// Solution 2:
function rotateString3(str1, str2) {
  check = '';
  check += str1 + str1;
  if (check.includes(str2)) {
    return true;
  }
  return false;
}
// console.log(isRotation(strA1, strB1));
// console.log(isRotation(strA2, strB2));
// console.log(isRotation(strA3, strB3));

console.log(rotateString3(strA1, strB1));
console.log(rotateString3(strA2, strB2));
console.log(rotateString3(strA3, strB3));

// ---------- problem # 3 ( this actually belongs to tomorrow, so don't worry if you don't touch it today !
//   Given an array of objects / dictionaries to represent new inventory,
//   and an array of objects / dictionaries to represent current inventory,
//   update the quantities of the current inventory

//   if the item doesn't exist in current inventory, add it to the inventory
//   return the current inventory after updating it.

const newInv1 = [
  { name: 'Grain of Rice', quantity: 9000 },
  { name: 'Peanut Butter', quantity: 50 },
  { name: 'Royal Jelly', quantity: 20 },
];
const currInv1 = [
  { name: 'Peanut Butter', quantity: 20 },
  { name: 'Grain of Rice', quantity: 1 },
];
const expected1b = [
  { name: 'Peanut Butter', quantity: 70 },
  { name: 'Grain of Rice', quantity: 9001 },
  { name: 'Royal Jelly', quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: 'Peanut Butter', quantity: 20 }];
const expected2b = [{ name: 'Peanut Butter', quantity: 20 }];

const newInv3 = [{ name: 'Peanut Butter', quantity: 20 }];
const currInv3 = [];
const expected3b = [{ name: 'Peanut Butter', quantity: 20 }];
*/

/*
// ---------- problem # 1---------------------------------
//   Given an array of objects / dictionaries to represent new inventory,
//   and an array of objects / dictionaries to represent current inventory,
//   update the quantities of the current inventory

//   if the item doesn't exist in current inventory, add it to the inventory
//   return the current inventory after updating it.

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

function updateInventory(newInv = [], currInv = []) {
  for (let i = 0; i < newInv.length; i++) {
    let itemFound = false;
    const newItem = newInv[i];

    for (let j = 0; j < currInv.length; ++j) {
      const currItem = currInv[j];

      if (newItem.name === currItem.name) {
        itemFound = true;
        currItem.quantity += newItem.quantity;
        // no need to keep looping over the rest of the items since we found what we are looking for
        break;
      }
    }
    // after looking through all current inventory
    if (itemFound === false) {
      currInv.push(newItem);
    }
  }
  return currInv;
}

console.log(updateInventory(newInv1, currInv1));

// Problem 2:
// Given a string that may have extra spaces at the start and the end,
// return a new string that has the extra spaces at the start and the end trimmed (removed)
// do not remove any other spaces.

const str1 = '   hello world    ';

// Simple Solution
function trim(str) {
  return str.trim();
}

// Solution 2:
function trim2(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ' || (str[i - 1] != ' ' && str[i + 1] != ' ')) {
      newStr += str[i];
    }
  }
  return newStr;
}

// console.log(trim2(str1));

// ------------------problem  #3 ------------------
//   An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//   typically using all the original letters exactly once.
//   Is there a quick way to determine if they aren't an anagram before spending more time?
//   Given two strings
//   return whether or not they are anagrams

const strA1 = 'yes';
const strB1 = 'eys';
const expected1a = true;

const strA2 = 'yes';
const strB2 = 'eYs';
const expected2a = true;

const strA3 = 'no';
const strB3 = 'noo';
const expected3a = false;

const strA4 = 'silent';
const strB4 = 'listen';
const expected4a = true;

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let str1a = str1.toLowerCase();
  let str2a = str2.toLowerCase();
  let map = {};

  for (i = 0; i < str1a.length; i++) {
    if (map[str1a[i]]) {
      map[str1a[i]] += 1;
    } else {
      map[str1a[i]] = 1;
    }
  }
  // console.log(map);

  for (i = 0; i < str2a.length; i++) {
    if (map[str2a[i]]) {
      map[str2a[i]]--;
    }
  }
  // console.log(map);

  let keys = Object.keys(map);
  for (i = 0; i < keys.length; i++) {
    if (map[keys[i]] != 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));
*/

// ----------------Question 1 -----------------------

// Given an array of ints representing a line of people where the space between
// indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
// that space,
// return whether or not there is at least 6 feet separating every person.
// Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

function spaceChecker(queue) {
  for (i = 0; i < queue.length; i++) {
    // returns false when there are 1's next to each other
    if ((queue[i] == 1) & (queue[i + 1] == 1)) return false;

    // for loop checks number of spaces between i's, and iterates count and i
    if ((queue[i] == 1) & (queue[i + 1] == 0)) {
      var count = 0;
      while (queue[i + 1] == 0) {
        count++;
        i++;
      }

      // counts between 1s less than 6 return false
      if (count < 6 && queue[i + 1] == 1) return false;
    }
  }
  // all conditions met return
  return true;
}

console.log(spaceChecker(queue1));
console.log(spaceChecker(queue2));
console.log(spaceChecker(queue3));
console.log(spaceChecker(queue4));

// ------------- Question 2-------------------
//   Balance Index
//   Here, a balance point is ON an index, not between indices.
//   Return the balance index where sums are equal on either side
//   (exclude its own value).
//   Can it happen more than once?
//   Return -1 if none exist.

const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;
const nums2 = [9, 9];
// const expected2 = -1;

function balance(nums) {
  leftBalance = 0;
  rightBalance = 0;

  // for loop to set right balance value
  for (i = 0; i < nums.length; i++) {
    rightBalance += nums[i];
  }

  balancesFound = false;
  balances = [];

  for (i = 0; i < nums.length; i++) {
    rightBalance -= nums[i];

    if (leftBalance == rightBalance) {
      balancesFound = true;
      balances.push(i);
    }

    leftBalance += nums[i];
  }

  if (balancesFound == false) return -1;
  return balances;
}

console.log(balance(nums1));
console.log(balance(nums2));
