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

/*
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
*/ /*
// -------------1-  Binary Search------------
//   Array: Binary Search (non recursive)
//   Given a sorted array and a value, return whether the array contains that value.
//   Do not sequentially iterate the array. Instead, ‘divide and conquer’,
//   taking advantage of the fact that the array is sorted .
//   Bonus (alumni interview):
//     first complete it without the bonus, because they ask for additions
//     after the initial algo is complete
//     return how many times the given number occurs

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

function binary_search(arr, searchNum) {
  left = 0;
  right = arr.length - 1;
  while (right >= left) {
    mid = Math.floor((left + right) / 2);
    if (searchNum === arr[mid]) {
      return true;
    } else if (searchNum > arr[mid]) {
      left = mid + 1;
    } else if (searchNum < arr[mid]) {
      right = mid - 1;
    }
  }
  return false;
}

console.log(binary_search(nums1, searchNum1));

// -------------2:  interleaving  arrays:-------------------
//   Given two arrays, interleave them into one new array.
//   The arrays may be different lengths. The extra items should be added to the
//   back of the new array.

const arrA1 = [1, 2, 3];
const arrB1 = ['a', 'b', 'c'];
// const expected1 = [1, 'a', 2, 'b', 3, 'c'];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
// const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
// const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
// const expected4 = [42, 0, 6];

function interleave(arr1, arr2) {
  index = 0;
  result = [];
  while (index <= arr1.length || index <= arr2.length) {
    if (arr1[index] != undefined) {
      result.push(arr1[index]);
    }
    if (arr2[index] != undefined) {
      result.push(arr2[index]);
    }
    index++;
  }
  return result;
}

console.log(interleave(arrA1, arrB1));
console.log(interleave(arrA2, arrB2));
console.log(interleave(arrA3, arrB3));
*/

/*
// ------------  problem 1 ---------------
// Given a SORTED array of integers, dedupe the array
// Because array elements are already in order, all duplicate values will be grouped together.
// Ok to use a new array
// Bonus: do it in O(n) time (no nested loops, new array ok)
// Bonus: Do it in-place (no new array)
// Bonus: Do it in-place in O(n) time and no new array
// Bonus: Keep it O(n) time even if it is not sorted

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

function dedupe(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  let keys = Object.keys(map);
  return keys;
}

// console.log(dedupe(nums1));
// console.log(dedupe(nums2));
// console.log(dedupe(nums3));
// console.log(dedupe(nums4));

// -------------problem 2 -----------------------
//   Given an array of integers
//   return the first integer from the array that is not repeated anywhere else
//   If there are multiple non-repeated integers in the array,
//   the "first" one will be the one with the lowest index.

const nums1a = [3, 5, 8, 4, 3, 4, 7, 6, 5];
// const expected1 = 6;

const nums2a = [3, 5, 5];
// const expected2 = 3;

const nums3a = [3, 3, 5];
// const expected3 = 5;

const nums4a = [5];
// const expected4 = 5;

const nums5a = [];
// const expected5 = null;

function firstInt(arr) {
  if (arr.length == 0) {
    return null;
  }

  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  // Need to fix this, loop through the array and return the first key that has a value of 1
  let keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] == 1) {
      return keys[i];
    }
  }
}

console.log(firstInt(nums1a));
console.log(firstInt(nums2a));
console.log(firstInt(nums3a));
console.log(firstInt(nums4a));
console.log(firstInt(nums5a));
*/
/*
// ------------------- Problem 1----------------
//   Given an int to represent how much change is needed
//   calculate the fewest number of coins needed to create that change,
//   using the standard US denominations

const cents1 = 25;
// const expected1 = { quarter: 1 };

const cents2 = 50;
// const expected2 = { quarter: 2 };

const cents3 = 9;
// const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
// const expected4 = { quarter: 3, dime: 2, penny: 4 };

function change_dict(cents) {
  penny = 1;
  nickel = 5;
  dime = 10;
  quarter = 25;
  change = {};
  if (Math.floor(cents / 25)) {
    change[quarter] = Math.floor(cents / 25);
    cents -= Math.floor(cents / 25) * 25;
  }
  if (Math.floor(cents / 10)) {
    change[dime] = Math.floor(cents / 10);
    cents -= Math.floor(cents / 10) * 10;
  }
  if (Math.floor(cents / 5)) {
    change[nickel] = Math.floor(cents / 5);
    cents -= Math.floor(cents / 5) * 5;
  }
  if (cents) {
    change[penny] = cents;
  }
  return change;
}

console.log(change_dict(cents1));
console.log(change_dict(cents2));
console.log(change_dict(cents3));
console.log(change_dict(cents4));

// -------------- problem 2 ----------------
//   for this problem, don't use any built-in sort function.
//   Missing Value
//   You are given an array of length N that contains, in no particular order,
//   integers from 0 to N . One integer value is missing.
//   Quickly determine and return the missing value.

const nums1a = [3, 0, 1];
// const expected1 = 2;

const nums2a = [3, 0, 1, 2];
// const expected2 = null;

// Explanation: nothing is missing
// Bonus: now the lowest value can now be any integer (including negatives),
// instead of always being 0.

const nums3a = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

const nums4a = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;
*/

/*
// This week: Recursion
// ------  problem 1:-------------
// Recursive Sigma
// Input: integer
// Output: sum of integers from 1 to Input integer

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -2;
const expected3 = -2;

function Sigma(num) {
  num = Math.floor(num);
  if (num < 1) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  return Sigma(num - 1) + num;
}

console.log(Sigma(num1));
console.log(Sigma(num2));
console.log(Sigma(num3));

// ------------- Problem 2---------------------
//   Recursively sum an arr of ints

const nums1 = [1, 2, 3];
// const expected1 = 6;

const nums2 = [1];
// const expected2 = 1;

const nums3 = [];
// const expected3 = 0;

function sigmaArr(arr) {
  if (arr.length == 0) {
    return 0;
  }
  var sum = arr.pop();
  return sum + sigmaArr(arr);
}

console.log(sigmaArr(nums1));
console.log(sigmaArr(nums2));
console.log(sigmaArr(nums3));
*/

/*
function factRec(n) {
  if (n == 1) {
    return 1;
  }
  console.log(n);
  return n * factRec(n - 1);
}

console.log(factRec(5)); // This happens 4 times.

// =-------------problem 1---------------------
// The height map of an area in represented an 2 dimensional array.

// If rain pours in one point in the map to untill it fills everywhere to
// a height value,
// which parts of the map will go under water?

// Solution:
// Make a 2d array for showing the points that has gone under water.

// Then use a recursive algorithm to fill the 2d array. For example:
// If the height value is less than a point's height:
//     put '-' in the array's element.
// If the height value is higher than a point's height:
//     put 'X' in the element

// suppose that this is the height map:
let arr = [
  [3, 5, 6, 7, 2],
  [2, 3, 7, 9, 8],
  [4, 2, 1, 3, 9],
  [3, 2, 6, 2, 6],
  [9, 8, 7, 5, 3],
];

function rainMap(arr, startPoint) {
  let maxPoint = arr[0][1];
}

// Let's warm up with the Fibonacci sequence in recursive.
//   Return the fibonacci number at the nth position, recursively.

//   Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//   The next number is found by adding up the two numbers before it,
//   starting with 0 and 1 as the first two numbers of the sequence.

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

function findFibo(num) {
  if (num <= 1) return num;
  return findFibo(num - 1) + findFibo(num - 2);
}

// Now solve the recursion algorithm with Memoization.
let dict = {};
function fib(n) {
  if (dict[n]) {
    return dict[n];
  }
  if (n <= 1) {
    dict[n] = n;
    return n;
  } else {
    temp = fib(n - 1) + fib(n - 2);
    dict[n] = temp;
    return temp;
  }
}
*/

// -------------problem 1---------------------

// The height map of an area in represented an 2 dimensional array.

// If rain pours in one point in the map to untill it fills everywhere to
// a height value,
// which parts of the map will go under water?

// Solution:
// Make a 2d array for showing the points that has gone under water.
// Then use a recursive algorithm to fill the 2d array. For example:
// If the height value is less than a point's height:
//     put '-' in the array's element.
// If the height value is higher than a point's height:
//     put 'X' in the element
// suppose that this is the height map:

[
  [3, 5, 6, 7, 2],
  [2, 3, 7, 9, 8],
  [4, 2, 1, 3, 9],
  [3, 2, 6, 2, 6],
  [9, 8, 7, 5, 3],
];

// -------------------  Problem 2------------------
//   Given
//     - a 2d array representing a social space as a grid
//       Each grid space either has a string representing a person's name,
//       or null if there is no person there
//     - a point object {x: int, y: int} indicating where "patient zero" is in the grid
//   return an array of all the names of the people who that corona virus will spread to due to not social distancing

//   There will be exactly one grid space with the value "patient zero" that
//   represents someone infected.
//   Standing next to someone means there is someone in the grid space immediately
//   above, below, left, or right. Infection cannot directly spread diagonally.
//   Someone is social distancing if the grid space above, below, left, and right are null or
//   there is no space next to them.
//   For simplicity sake, let's assume if a person is standing
//   next to someone who is or becomes infected, they will also become infected.
//   Find everyone who corona virus will spread to starting from "patient zero" as the virus spreads outward.

const socialSpaceGrid = [
  ['Jon2', 'Jane2', null, null],
  [null, 'Jon1', 'Jane1', null],
  ['Jane4', 'patient zero', null, 'Jon3'],
  ['Jon4', null, 'Jane3', null],
];
const patientZeroPoint = { x: 1, y: 2 };
const expected = ['Jane4', 'Jon4', 'Jon1', 'Jane1', 'Jane2', 'Jon2'];
// order of output list does not matter
