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

// Output each student's name and grade to the console
students.forEach((student, index) => {
  const { firstName, lastName, id } = classObj.students[index];
  console.log(`(Student ID Number: ${id}) | Name: ${firstName} ${lastName}`);
  console.log(`Final Grade: ${student.grade}`);
  console.log("------------------------------------------------")
});


// Separate students into two arrays based on their grade
const highAchievers = students.filter((student) => student.grade > 70);
const lowAchievers = students.filter((student) => student.grade <= 70);

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
console.log(`This is the average of all student grades: ${average}`);