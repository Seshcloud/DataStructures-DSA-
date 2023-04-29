
const arrayInputs = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let arr = [];
    let counts = {};
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        const el = arr1[i];
        counts[el] = (counts[el] || 0) + 1;
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    for (const el in counts) {
      for (let i = 0; i < counts[el]; i++) {
        arr.push(parseInt(el));
      }
    }
  
    return arr;
  };
  
  const arr1 = [7, 8, 1, 2, 3, 4, 5, 6];
  const arr2 = [2, 8, 4, 6, 8, 10, 7];
  
  console.log(arrayInputs(arr1, arr2));
  