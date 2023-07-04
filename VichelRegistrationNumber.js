// let luckyNumber  = 8;

// let startRange = 2000;
// let startRangeArray = Array.from(String(startRange), Number);
// console.log(startRangeArray);

// let endRange = 2099;
// let endRangeArray = Array.from(String(endRange), Number);
// console.log(endRangeArray);

// const findNumbers = (luckyNumber,startRangeArray,endRangeArray) =>{
//     let luckyNumbers = [];
//     console.log(luckyNumber);
//     console.log(startRangeArray);
//     console.log(endRangeArray);
//     let l = startRangeArray.length;

// }

// let result = findNumbers(luckyNumber,startRangeArray,endRangeArray)

// var x = startRangeArray
// var y = x.join('');
// console.log(y);
// console.log(typeof y++);
// console.log(y);

// function abcd(a, b) {
//   let luckyNumbers = [];
//   for (let i = a; i <= b; i++) {
//     let bo = i.toString();
//     let count = 0;
//     for (let j = 0; j < bo.length; j++) {
//       count = count + parseInt(bo[j]);
//     }
//     if (count === 8) {
//       console.log(i);
//       luckyNumbers.push(i);
//     }
//   }
//   console.log(luckyNumbers);
// }
// abcd(2000, 3000);

let luckyNumber = 8;
let startRange = 2000;
let endRange = 3000;

var allLuckyNumbers = GetREGNumber(luckyNumber, startRange, endRange);

console.log(allLuckyNumbers);

function GetREGNumber(luckyNumber, startRange, endRange) {
  var luckyNumbers = [];
  for (let i = startRange; i <= endRange; i++) {
    let bo = i.toString();
    let count = 0;
    for (let j = 0; j < bo.length; j++) {
      count = count + parseInt(bo[j]);
    }
    if (count === luckyNumber || count === 26 || count === 17) {
      luckyNumbers.push(i);
    }
  }
  return luckyNumbers;
}

// function abcd(a, b) {    
//     for (let i = a; i <= b; i++) {     
//         let bo = i.toString()     
//         let count = 0     
//          for (let j = 0; j < bo.length; j++) {      
//               count = count + parseInt(bo[j]);     
//             }     
//             if (count === 8 || count === 26 || count === 17) {       
//                 console.log(i);     
//             }    
//         } 
//     } 
    
//     abcd(2000, 3000)