let s1 = "asdfghadfh"
/*
a = 2
s = 1
d = 2
f = 2
g = 1
h = 2
*/
console.log(s1);
let s2 = s1.split("")
console.log(s2);
let l1 = s2.length;
console.log(l1);
let count = 1;
for(let i = 0; i<l1; i++){
    for(let j = i+1; j < l1; j++){
         if(s2[i] == s2[j]){
            count++;
            s2[j] = 0
         }
    }
    if(s2[i] != 0){
        console.log(`${s2[i]} = ${count}`);
    }
    count = 1;
}