const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12, 13];

function findUnique(arr) {
  // ...
  let result = [];
  let counter = 0;
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < arr.length; k++){
        if (arr[i] === arr[k]){
          counter++;
        }
      }
      if (counter === 1){
        result.push(arr[i]);
      }
      counter = 0;
    }
    document.getElementById("firstResultText").textContent = result.join(", ");
  }
}
findUnique(array); // [2, 5]
