let arr = [1,2,3,5,6,7]
let l1 = arr.length;
let sum = 0;
for(let i = 0; i<l1; i++){
    sum = sum + arr[i]
}
console.log(sum);
let k = 0
let max = arr[k]
for(let j = 0; j<l1; j++){
    if(max < arr[j+1]){
       max = arr[j+1]
    }
}
console.log(max);
let total = max*((max + 1)/2);
console.log(total);
let ans = total - sum;
console.log(`missing nymber is ${ans}`);

