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

  const stack = []
  let current = linkedList
  
  do {
    stack.push(current.value)
    current = current.next
  }
  while( current );

  while( stack.length ) {
    console.log('[linkedList value]: ', stack.pop());
  }

}

reversePrint(someList);
