function intersection(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (newArr[newArr.length - 1] !== arr1[i]) {
        newArr.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else j++;
  }
  return newArr;
}
arr1 = [1, 1, 1, 2, 2, 2, 2, 3, 3];
arr2 = [1, 1, 2, 2, 2, 2, 3, 3, 7];

console.log(intersection(arr1, arr2));
