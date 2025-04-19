function maxIndex(arr) {
  let maxminNum = {
    maxNum: {
      index: 0,
      max: -Infinity,
    },
    minNum: {
      index: 0,
      min: Infinity,
    },
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxminNum.maxNum.max) {
      maxminNum.maxNum.max = arr[i];
      maxminNum.maxNum.index = i;
    }
    if (arr[i] < maxminNum.minNum.min) {
      maxminNum.minNum.min = arr[i];
      maxminNum.minNum.index = i;
    }
  }
  return maxminNum;
}

console.log(maxIndex([1, 2, 3, 64, 8, 3, 7, 8]));
