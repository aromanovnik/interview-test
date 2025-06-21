const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  dat = []
  dat2 = []
  dat3 = []

  for (let i = 0; i <= arr.length; i++) {
    if (dat.includes(arr[i])) {
      dat2.push(arr[i])
    } else {
      dat.push(arr[i])
    }
  }

  for (let i = 0; i <= dat.length; i++) {
    if (dat2.includes(dat[i])) {
    } else if (dat[i] !== undefined) {
      dat3.push(dat[i]);

    }
  }

  console.log(dat3);
}

findUnique(array); // [2, 5]
