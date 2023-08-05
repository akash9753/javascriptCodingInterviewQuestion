let a = [1, 2,2, 3, 4, 5, 1, 1];
let unique = []
let duplicate = []
let distinct = []

let myMap = new Map();

for (let i = 0; i < a.length; i++) {
  console.log(myMap.has(a[i]))
  if (myMap.has(a[i])) {
    myMap.set(a[i], myMap.get(a[i]) + 1);
  } else {
    myMap.set(a[i], 1);
  }
}
console.log(myMap);

for(let k of myMap.keys()){
  console.log(k)
  if(myMap.get(k) > 1){
    duplicate.push(k)
  }
  if(myMap.get(k) === 1){
    unique.push(k)
  }
  if(myMap.get(k) >= 1){
    distinct.push(k)
  }
}
console.log(duplicate)
console.log(unique)
console.log(distinct)