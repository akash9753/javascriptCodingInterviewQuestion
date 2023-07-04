// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");

// let text = "Hello World, welcome to the universe.";
// let result = text.includes("world", 12);


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1



var allNumbers = ["a","b","c","d","a","b","c","d"];
var uniqueArray = allNumbers.filter((value, index, self) => {
    return self.indexOf(value) === index
});

console.log(uniqueArray);