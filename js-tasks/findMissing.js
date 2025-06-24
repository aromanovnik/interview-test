const second_array = [2, 1, 3, 5]; // array переименовал  на second_array

function findMissing(arr) {
  // Проверяем на массив
  if (Array.isArray(arr)) {
    // сортируем массив
    arr = arr.sort();

    for (let i = 0; i < arr.length; i++){
      // Проверяем текущее число плюс один равна ли на следующее число, если нет возвращаем
      if ((arr[i] + 1) !== arr[i + 1]){
        return (arr[i] + 1);
      }
    }
  }
}

let result = findMissing(second_array);
document.getElementById("secondResultText").textContent = result;
