let arr = [2,0,4,5,0,8]
let resultArr = []

let l1 = arr.length;
let j = 0;
for(let i = 0; i < l1; i++){
        if(arr[i] !== 0){
            resultArr[j] = arr[i]
            j++;
        } 
}
for(let i = 0; i < l1; i++){
    if(arr[i] === 0){
        resultArr[j] = arr[i]
        j++;
    } 
}

console.log(resultArr);
