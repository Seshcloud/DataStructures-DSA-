const highestNumber = arr => {
    let temp;
    let i=0
    while ( i < arr.length - 1) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i = -1;
      }
      i++
    }
    return arr;
  };

  const arr = [101, 33, 2, 4, 5, 6, 8, 9, 1, 39, 119, 160];
  const highest = highestNumber(arr);
  console.log(highest);
