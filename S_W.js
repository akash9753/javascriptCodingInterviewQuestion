let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];

// let k = 3;
// // console.log(arr.length);
// let sum =0;
// let max = 0;
// let maxArr = []
// for (let i = 0; i <= arr.length - k; i++) {
//   // console.log(arr[i])
//   for (let j = i; j < i+k; j++) {
// //    console.log(arr[j]);
//     if(arr[j] > max){
//         max = arr[j]
//     }
//   }
//   maxArr.push(max)
// }
// console.log(maxArr);

function maxOfSubArray(arr, k) {
    let max = 0;
    let maxArr = []
    for (let i = 0; i <= arr.length - k; i++) {
      // console.log(arr[i])
      for (let j = i; j < i+k; j++) {
    //    console.log(arr[j]);
        if(arr[j] > max){
            max = arr[j]
        }
      }
      maxArr.push(max)
    }
    return maxArr;
    }

console.log(maxOfSubArray([8,5,10,7,9,4,15,12,90,13],4));