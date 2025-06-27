const someList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function reversePrint(linkedList) {
  const result = [];

  // Проходим по вложенному списку и записываем value в result
  let current = linkedList;
  while (current !== null) {
    result.unshift(current.value);
    current = current.next;
  }

  // Делаем его строкой с связанными с запятой
  console.log(result.join(", "));
}

reversePrint(someList);
