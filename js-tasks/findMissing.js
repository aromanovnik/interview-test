const array = [2, 1, 3, 5];

function findMissing(arr) {

  const N = Math.max(...arr)
  
  const total = Array.from({length: N}).map((_, idx) => idx + 1).reduce((a,b) => a + b)

  const current = arr.reduce((a,b) => a + b)

  return total - current

}

console.log(findMissing(array))
