let arr1 = [1,2,2,3,4,4,5]
let resultArr = []
let outputArr = []
console.log(arr1.indexOf(6));
let l1 = arr1.length;
let j = 0;
let k = 0;
for(let i = 0; i < arr1.length; i++){
       if(resultArr.indexOf(arr1[i]) === -1){
           resultArr[j] = arr1[i]
           j++;
       }else{
           outputArr[k] = arr1[i]
           k++;
       }
}

console.log(resultArr);
console.log(outputArr);

