const array = [1, 2, 3, 5];

function findMissing(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b)

  if(sortedArray[0] !== 1) return 1

  for(let i = 0; i < sortedArray.length - 1; i++) {
    const currentNumber = sortedArray[i]
    const nextNumber = sortedArray[i + 1]

    if(currentNumber + 1 !== nextNumber && nextNumber !== undefined) return currentNumber + 1
  }

  return null;
}

console.log(findMissing(array));
