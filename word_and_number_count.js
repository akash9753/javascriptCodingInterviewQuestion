//let arr = ["yellow","green","yellow","white","yellow"]
let arr = [1,8,5,7,9,6,3,4,1,4,4]
let count = 1;
for(let i=0;i<arr.length;i++){
   for(let j = i+1; j<arr.length;j++){
        if(arr[i] == arr[j]){
         count++;
         arr[j] = '0'
      }
   }
   if(arr[i]!='0')
   console.log(`${arr[i]} = ${count}`)
   count = 1
}
