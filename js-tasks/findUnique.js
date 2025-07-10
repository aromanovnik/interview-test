const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  const map = {};
  const result = [];

  for (const num of arr) {
    if (map[num] === undefined) {
      map[num] = true;
    } else if (map[num]) {
      map[num] = false;
    }
  }

  for (const num of arr) {
    if (map[num]) result.push(num);
  }

  return result;
}

console.log(findUnique(array)); // [2, 5]
