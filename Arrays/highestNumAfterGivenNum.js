
const arrayprblm = (arr, num) => {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      if (i === arr.length - 1) {
        return -1;
      }

      if (i + j === arr.length) {
        return -1;
      }

      if (arr[i + j] > arr[i]) {
        return arr[i + j];
      } else {
        i--;
        j++;
      }
    }
  }
  return -1;
};

const array = [100, 99, 9, 2, 4, 6, 3, 53, 2, 1, 12, 5, 8];
const num = 53;
console.log(arrayprblm(array, num));