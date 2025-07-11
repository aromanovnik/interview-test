const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b)
  const result = []


  for(let i = 1; i < sortedArray.length - 1; i++) {
    const prevNumber = sortedArray[i - 1];
    const currentNumber  = sortedArray[i];
    const nextNumber  = sortedArray[i + 1];

    if(prevNumber !== currentNumber && currentNumber !== nextNumber) {
      result.push(currentNumber);
    }
  }

  return result;
}

console.log(findUnique(array)); // [2, 5]
