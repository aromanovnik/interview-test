const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  
  const cache = new Map();
  const uniques = []

  for ( let i = 0; i < arr.length; i++ ) {

    const current = cache.get(arr[i])

    if( current ) {
      
      uniques.splice( uniques.indexOf(current.value), 1 )
      current.occurence++;

    } else {
      uniques.push(arr[i])
      cache.set( arr[i], {
        occurence: 1,
        idx: i,
        value: arr[i]
      })

    }

  }

  return uniques
}

console.log(findUnique(array)); // [2, 5]
