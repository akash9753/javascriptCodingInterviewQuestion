let students = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    studentID: "A12345",
    id:1,
    grades: {
      midterm: 85,
      final: 90,
    },
    address:[
        {primaryAddress:"pune"},
        {secondaryAddress:"mumbai"},
        {
            school:[
                {hsc:"adhartal"},
                {ssc:"madanmehal"}
            ]
        }   
    ]
  },
];

console.log(typeof students);
let allObj = {};
const flatAob = (students) => {
  if (Array.isArray(students)) {
    console.log(true);
    students.forEach((element) => {
      console.log(typeof element);
      for (let key in element) {
        if (typeof element[key] === "object") {
          flatAob(element[key]);
        } else if(Array.isArray(element)){
            flatAob(element);
        }
        else {
          allObj[key] = element[key];
        }
      }
    });
  } else if (students) {
    for (let key in students) {
        if (typeof students[key] === "object") {
          flatAob(students[key]);
        } else {
          allObj[key] = students[key];
        }
      }
  }
  return allObj;
};
console.log(flatAob(students));
