const arr = [1, 22, 3, 44, 55, 66, 7, 8, 3, 33, 7, 8, 99];

const oddOrEven = (arr) => {
  let odd = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 == 1) {
      odd.push(i);
    }
  }
  return odd;
};

console.log(oddOrEven(arr));