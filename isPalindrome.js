function isPalindrome(str) {
  let map = {};
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  for (key in map) {
    if (map[key] % 2 !== 0) {
      count++;
    }
  }
  if (count == 0 || count == 1) {
    return true;
  } else return false;
}

let str1 = 'baba';
let str2 = 'xyzxyzzz';
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
