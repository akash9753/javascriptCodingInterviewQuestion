let arr1 = ["a","b","c","b","c","d","j","b"]
let arr2 = []
let arr3 = []
let arr4 = []
let count = 1;
for(let i = 0; i < arr1.length; i++){
  for(let j = i+1; j < arr1.length; j++){
     if(arr1[i] === arr1[j]){
      count++;
      arr1[j] = null;
     }
  }
  if(arr1[i] != null){
  console.log(`${arr1[i]}: ${count}` ) 
  arr2.push(arr1[i])
  }
  if(count === 1 && arr1[i] != null){
   arr3.push(arr1[i])
 }
  if(count > 1 && arr1[i] != null){
   arr4.push(arr1[i])
 }
  count = 1;
}
console.log("Distinct Element",arr2)
console.log("Unique Element",arr3)
console.log("Duplicate Element",arr4)