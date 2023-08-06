// let a = [16,4,23,8,15,42,1,2]
// let target = 19;
// const hasMap = {};
// for(let i = 0; i < a.length; i++){
//   const compliment = target - a[i];
//   if(hasMap[compliment] !== undefined){
//       console.log(hasMap[compliment],i)
//   }else{
//       hasMap[a[i]] = i;
//   }
// }
// console.log(hasMap)

function twoSum(nums, target) {
  let myMap = new Map()
  let compliment;
  for(let i = 0; i < nums.length; i++){
     compliment = target - nums[i]
     if(myMap.get(compliment) === undefined){
         myMap.set(nums[i],i)
     }else{
         let s = myMap.get(compliment)
        return [i,s]
     }
  }
}
console.log(twoSum([16,4,23,8,15,42,1,2],19));
