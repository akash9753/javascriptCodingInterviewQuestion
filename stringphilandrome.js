
const isPilndrome = (s) =>{
   let i, j;
   let flag = 0;
   for(i= 0, j = s.length-1; i<j; i++,j--){
       if(s[i] !== s[j]){
          flag++;
       }
   }
   if(flag > 0){
     return false;
   }else{
     return true;
   }
}

let s1 = "malayalam"
console.log(isPilndrome(s1))