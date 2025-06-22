const someList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function reversePrint(linkedList) {
   dat = [];

  for (let current = linkedList; current !== null; current = current.next) {
    dat.push(current.value);
  }
  console.log(dat.reverse());

}

reversePrint(someList);
