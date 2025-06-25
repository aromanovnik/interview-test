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
  let arr = [];
  let result = [];
  // Если структура object состоит только из value, next
  while (linkedList) {
    arr.push(linkedList.value);
    linkedList = linkedList.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
let res = reversePrint(someList);
console.log(res);
document.getElementById("thirdResultText").textContent = res.join(", ");
