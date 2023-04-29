const bubbleSort = (arr) => {
  let changing = false;
  do {
    changing = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        changing = true;
      }
    }
  } while (changing);
  return arr;
};

const array = [20, 10, 9, 4, 6, 8];
console.log(bubbleSort(array));
