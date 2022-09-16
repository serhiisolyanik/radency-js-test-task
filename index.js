function loadGrain(levels = []) {
  let leftIndex = 0,
    rightIndex = levels.length - 1,
    left = 0,
    right = 0,
    result = 0;

  levels.length < 3 && 0;

  while (leftIndex < rightIndex) {
    left = levels[leftIndex] > left ? levels[leftIndex] : left;

    right = levels[rightIndex] > right ? levels[rightIndex] : right;

    left >= right
      ? ((result += right - levels[rightIndex]), rightIndex--)
      : ((result += left - levels[leftIndex]), leftIndex++);
  }

  return result;
}

console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
console.log(
  loadGrain([
    11, 30, 18, 7, 35, 16, 26, 5, 25, 49, 36, 29, 35, 18, 48, 19, 39, 36, 4, 10,
  ])
); // 203
