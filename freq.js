// function freq(arr, n) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) counter++;
//   }
//   return counter;
// }

let counter = 0;
let arr = [1, 2, 1, 4, 32, 1, 31, 1, 9, 1];
let ar = arr.filter((v) => v === 1).length;

console.log(ar);

