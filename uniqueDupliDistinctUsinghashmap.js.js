let s1 = ["1","2","2","3","3","3","4"];
let s2 = "nagaram";

let obj1 = {};
let obj2 = {};
let unique = [];
let duplicate = [];
let distinct = [];

for (let i = 0; i < s1.length; i++) {
  obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
  obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
}

console.log(obj1);
console.log(obj2);

for (let key in obj1) {
  if (obj1[key] > 1) {
    // console.log(key, obj1[key]);
    duplicate.push(+key);
  }
  if (obj1[key] === 1) {
    // console.log(key, obj1[key]);
    unique.push(+key);
  }
  if (obj1[key] >= 1) {
    // console.log(key, obj1[key]);
    distinct.push(+key);
  }
}
console.log(duplicate);
console.log(unique);
console.log(distinct);