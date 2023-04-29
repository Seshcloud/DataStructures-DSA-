const array = [1, 2, 3, 4, 5, 1, 7, 0];

const countOfDuplicates = (arr) => {
  let count = {};
  let i = 0;
  while (i < arr.length) {
    const element = arr[i];

    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
    i++;
  }
  return count;
};

console.log(countOfDuplicates(array))