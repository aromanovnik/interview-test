const array = [2, 1, 3, 5];

function findMissing(arr) {
  const n = Math.max(...arr);
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

console.log(findMissing(array)); // 4
