const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  if (!arr) return [];

  // Создаем объект, который будет записывать число из массива и его count
  const counts = {};

  // Считаем count для каждого числа
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Оставляем только те числа в котором count 1, то есть уникальные
  return arr.filter((num) => counts[num] === 1);
}

findUnique(array); // [2, 5]
