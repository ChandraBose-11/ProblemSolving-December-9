function insertionSort(arr) {
  console.log(arr);
  debugger
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = temp;
        break;
      }
    }
    if (arr[0] > temp) {
      arr[0] = temp;
    }
  }
  console.log(arr);
}
insertionSort(
  Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
    Math.floor(Math.random() * 20)
  )
);
