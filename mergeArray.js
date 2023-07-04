let arr1 = [1,3,5,7];
let arr2 = [2,4,6,8];

let arr3 = []

let l1 = arr1.length;
let i = 0;
while(i < arr1.length){
   arr3[i] = arr1[i]
   i++;
}
let l2 = arr2.length;
let j = 0;
let k = l2;
while(j < l2){
   arr3[k] = arr2[j]
   j++;
   k++;
}

console.log((arr3.sort()));


