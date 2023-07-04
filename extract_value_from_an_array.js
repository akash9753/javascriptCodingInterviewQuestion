const p1 = [
    {"dish":"idli","marrige":"love","actor":"varun","cricketer":"sachin"},
    {"dish":"dosa","marrige":"arrange", "actor":"varun","cricketer":"kohli"}
]
console.log(p1)

const p2 = Object.values(p1[0]);
console.log(p2)
const p3 = Object.values(p1[1]);
console.log(p3)
let count = 0
for(let i = 0, j = 0; i<p2.length, j<p3.length; i++,j++){
        if(p2[i] == p3[j])
          count++
}
console.log(count)
percentage = (count/4)
console.log(percentage)
per = percentage*100
console.log(`profile matching % = ${per}%`)

/*if(persons[0].name == persons[1].name){
    console.log(true)
}else{
    console.log(false)
}*/
//console.log(`${persons[1].name}`)

/*const a1 = [1,2,3,4,5,6]
const a2 = [1,2,3,4,10,11]
let count = 0;

for(let i = 0, j = 0; i<a1.length, j<a2.length;i++,j++){
        if(a1[i] == a2[j]){
            count++
        }
}
console.log(`${count}`)*/

/*const a1 = ['love', 'virat', 'mango', 'night']
const a2 = ['love', 'virat', 'apple', 'morning']
let count = 0;
for(let i = 0, j = 0; i<a1.length, j<a2.length;i++,j++){
    if(a1[i] == a2[j]){
        count++
    }
}
console.log(`${count}`)*/