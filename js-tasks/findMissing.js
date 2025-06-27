const array = [2, 1, 3, 5];

function findMissing(arr) {
  arr.sort((a, b) => a - b);
  let result;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] - 2) {
      result = arr[i + 1] - 1;
    }
  }

  return result;
}

findMissing(array);
