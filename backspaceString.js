/*
https://leetcode.com/problems/backspace-string-compare/

BACKSPACE STRING COMPARE
Given two strings S and T containing only lowercase letters and "#" characters,
return if they are equal when both are typed into empty text editors.

# character means a backspace character.

i.e., after processing the backspaces, are the two strings equal?

Bonus: solve in O(n) time

Examples:

Input: S = "ab#c", T = "ad#c" "ac" "ac"
Output: true
Explanation: Both S and T become "ac"

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become ""
    
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c"
*/

const S = 'ab#c';
const T = 'ad#c';

const backspaceCompare = (S, T) =>
  processBackspaces(S) === processBackspaces(T) ? true : false;

const processBackspaces = (s) => {
  let backspaceCount = 0;
  let str = '';

  // loop backwards and skip if we see a #
  for (let i = s.length - 1; i >= 0; i--) {
    let isBackspace = s[i] === '#';

    if (backspaceCount > 0 && !isBackspace) {
      backspaceCount--;
    } else if (isBackspace) {
      backspaceCount++;
    } else {
      str = s[i] + str;
    }
  }
  return str;
};

console.log(backspaceCompare(S, T));

// function reduce(str) {
//   let newStr = '';

//   for (i = 0; i < str.length; i++) {
//     if (str[i] != '#') newStr.push(str[i]);
//     if ((str[i] === '#') & (newStr != '')) newStr.pop();
//     return newStr;
//   }
// }

// function compare(s, t) {
//   sReduce = reduce(s);
//   tReduce = reduce(t);
//   if (sReduce === tReduce) {
//     return true;
//   } else return false;
// }

// console.log(compare(S, T));
