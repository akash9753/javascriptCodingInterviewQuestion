let arr1 = [7,2,10,14,5,6]
let arr2 = [8,9,6,3,4,7]
let new_Merge_Arr = []
let i = 0
let j = 0
while(i< arr1.length){
   new_Merge_Arr[i] = arr1[i]
   i++
}
l = arr1.length + arr2.length
console.log(l)
while(i<l/*j<arr2.length*/ ){
   new_Merge_Arr[i] = arr2[j]
   i++
   j++
}
console.log(new_Merge_Arr)

const sort = (arr)=>{
   for(let i =0;i<arr.length-1;i++){
      for(let j =i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
           let temp = arr[j]
           arr[j] = arr[i]
           arr[i] = temp
        }
      }
   }
   return arr
}
let sort_array = sort(new_Merge_Arr)
console.log(sort_array)

