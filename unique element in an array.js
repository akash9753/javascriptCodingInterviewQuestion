let arr = ["a","b","a","b","u","a","b"]
let b = []
let len = arr.length;
for(let i = 0; i<len; i++ ){
   if(b.indexOf(arr[i])===-1){
   b.push(arr[i]);
   }
}
console.log(b);