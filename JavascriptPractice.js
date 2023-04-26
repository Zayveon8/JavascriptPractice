// Make array of students
// Include name and grade of each
const students = [
  { name: "Alice", grade: 67 },
  { name: "Bob", grade: 88 },
  { name: "Charlie", grade: 99 },
  { name: "David", grade: 45 },
  { name: "Eve", grade: 32 },
  { name: "Frank", grade: 74 },
  { name: "Grace", grade: 87 },
  { name: "Henry", grade: 89 },
  { name: "Isabel", grade: 80 },
  { name: "John", grade: 87 },
];

// Make a object that contains information about each student
const classObj = {
  students: [
    { firstName: "Alice", lastName: "Wonderland", id: 1 },
    { firstName: "Bob", lastName: "Constant", id: 2 },
    { firstName: "Charlie", lastName: "lewis", id: 3 },
    { firstName: "David", lastName: "Hill", id: 4 },
    { firstName: "Eve", lastName: "Long", id: 5 },
    { firstName: "Frank", lastName: "Douglas", id: 6 },
    { firstName: "Grace", lastName: "Street", id: 7 },
    { firstName: "Henry", lastName: "Willams", id: 8 },
    { firstName: "Isabel", lastName: "Hernandez", id: 9 },
    { firstName: "John", lastName: "suarez", id: 10 },
  ],
};

// Sum of all the grades
const total = students.reduce((acc, student) => acc + student.grade, 0);

// Get Average grade by dividing the sum by the number of students.
const average = total / students.length;
console.log("CLASS ONE: ")
console.log(" ")
console.log("------------------------------------------------")

// Output each student's name and grade to the console
students.forEach((student, index) => {
  const { firstName, lastName, id } = classObj.students[index];
  console.log(`(Student ID Number: ${id}) | Name: ${firstName} ${lastName}`);
  console.log(`Final Grade: ${student.grade}`);
  console.log("------------------------------------------------")
});


// Separate students into two arrays based on their grade
const highAchievers = students.filter((student) => student.grade > 70);
const lowAchievers = students.filter((student) => student.grade < 70);

// Output each student's name and grade to the console
console.log("Passed the class :)");

//line break

console.log("");


highAchievers.forEach((student, index) => {
  const { firstName, lastName, id } = classObj.students[index];
  console.log(`${firstName} ${lastName}`);
});

console.log("------------------------------------------------");

console.log("Failed the class :(");

//line break

console.log("");

lowAchievers.forEach((student, index) => {
  const { firstName, lastName, id } = classObj.students[index];
  console.log(`${firstName} ${lastName}`);
});


//line break

console.log("");

// Output the average grade to the console
console.log(`This is the average of all student grades in the class: ${average}`);
console.log("------------------------------------------------")
console.log(" ")
console.log("Class Two: ")
console.log(" ")
console.log("------------------------------------------------")


const students2 = [
  { name: "Tommy", grade: 96 },
  { name: "Willy", grade: 95 },
  { name: "Billy", grade: 100 },
  { name: "Davenchi", grade: 88 },
  { name: "Eviana", grade: 86 },
  { name: "Franklin", grade: 99 },
  { name: "Graceful", grade: 85 },
  { name: "Derrick", grade: 92 },
  { name: "Isabella", grade: 93 },
  { name: "Johnathan", grade: 68},
];

// Make a object that contains information about each student
const classObj2 = {
  students2: [
    { firstName: "Tommy", lastName: "Gaulden", id: 1 },
    { firstName: "Willy", lastName: "Redd", id: 2 },
    { firstName: "BIlly", lastName: "Leray", id: 3 },
    { firstName: "Davenchi", lastName: "Benifer", id: 4 },
    { firstName: "Eviana", lastName: "Tyson", id: 5 },
    { firstName: "Franklin", lastName: "Willams", id: 6 },
    { firstName: "Graceful", lastName: "Mayfield", id: 7 },
    { firstName: "Derrick", lastName: "Baker", id: 8 },
    { firstName: "Isabella", lastName: "Cox", id: 9 },
    { firstName: "Johnathan", lastName: "Hill", id: 10 },
  ],
};

// Sum of all the grades
const total2 = students2.reduce((acc, student) => acc + student.grade, 0);

// Get Average grade by dividing the sum by the number of students.
const average2 = total2 / students2.length;

// Output each student's name and grade to the console
students2.forEach((student, index) => {
  const { firstName, lastName, id } = classObj2.students2[index];
  console.log(`(Student ID Number: ${id}) | Name: ${firstName} ${lastName}`);
  console.log(`Final Grade: ${student.grade}`);
  console.log("------------------------------------------------")
});

// Separate students into two arrays based on their grade
const highAchievers2 = students.filter((student) => student.grade > 70);
const lowAchievers2 = students.filter((student) => student.grade <= 70);

// Output each student's name and grade to the console
console.log("Passed the class :)");

//line break

console.log("");


highAchievers2.forEach((student, index) => {
  const { firstName, lastName, id } = classObj2.students2[index];
  console.log(`${firstName} ${lastName}`);
});

console.log("------------------------------------------------");

console.log("Failed the class :(");

//line break

console.log("");

lowAchievers2.forEach((student, index) => {
  const { firstName, lastName, id } = classObj2.students2[index];
  console.log(`${firstName} ${lastName}`);
});


//line break

console.log("");


// Output the average grade to the console
console.log(`This is the average of all student grades in the class: ${average2}`);


// Sum of all the grades
const totalStudentsGrades = students2.reduce((acc, student) => acc + student.grade, 0) + students.reduce((acc, student) => acc + student.grade, 0);

//Get average of whole grade
const averageOfGrade =  totalStudentsGrades/ (students.length + students2.length);

console.log("------------------------------------------------");

// Output the average grade to the console
console.log(`Average for 8th grade: ${averageOfGrade}`);