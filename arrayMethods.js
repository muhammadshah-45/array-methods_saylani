const students = [  
    { name: 'Alice', score: 85 },  
    { name: 'Bob', score: 45 },  
    { name: 'Charlie', score: 72 },  
    { name: 'Diana', score: 55 }  
];  


const hasPassingStudent = students.some(student => student.score >= 60);  
console.log(`Is there any student with a passing score? ${hasPassingStudent}`); // true  


const totalScore = students.reduce((sum, student) => sum + student.score, 0);  
console.log(`Total score of all students: ${totalScore}`); // 257  

const failingStudents = students.filter(student => student.score < 60)  
                                 .map(student => student.name)  
                                 .join(', ');  
console.log(`Students with failing scores: ${failingStudents}`); // Bob, Diana  


students.forEach(student => {  
    console.log(`${student.name} has a score of ${student.score}`);  
});  


const studentNames = students.map(student => student.name);  
const isCharlieEnrolled = studentNames.includes('Charlie');  
console.log(`Is Charlie enrolled in the class? ${isCharlieEnrolled}`); // true