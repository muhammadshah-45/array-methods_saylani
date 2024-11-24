const students = [
  { name: "Akram", score: 85 },
  { name: "Dil Shad", score: 45 },
  { name: "Rehan", score: 72 },
  { name: "Imran", score: 55 },
];

console.log("some method");
const hasPassingStudent = students.some((student) => student.score >= 60);
console.log(`Is there any student with a passing score? ${hasPassingStudent}`); // true

console.log("reduce method");
const totalScore = students.reduce((sum, student) => {
  console.log("sum", sum, student.score);
  return sum + student.score;
}, 0);
console.log(`Total score of all students: ${totalScore}`); // 257

console.log("filter method");
const failingStudents = students
  .filter((student) => student.score < 60)
  .map((student) => student.name)
  .join(", ");
console.log(`Students with failing scores: ${failingStudents}`); // Bob, Diana
console.log('=>forEach method')
students.forEach((student) => {
  console.log(`${student.name} has a score of ${student.score}`);
});


console.log("=>map method")
const studentNames = students.map((student) => student.name);
console.log(studentNames)
console.log("=> includes method")
const isCharlieEnrolled = studentNames.includes("Muhammad Shah");
console.log(`Is Muhammad Shah enrolled in the class? ${isCharlieEnrolled}`); // true
