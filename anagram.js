let s1 = "anagram";
let s2 = "nagaram";

const isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
    obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(isAnagram(s1, s2));
