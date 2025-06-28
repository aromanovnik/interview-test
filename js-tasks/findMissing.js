const array = [2, 1, 3, 5];
//const array = [6, 11, 14, 8, 10, 7, 12, 13];

function findMissing(arr) {
  // ...
  dat = arr
  dat.sort((a, b) => a - b);


  for (let i = dat[0]; i <= dat[dat.length - 1]; i++) {
    if (!dat.includes(i)) {
      console.log(i);
    }
  }
}

findMissing(array);
