function memorize(fn){
    const cache = {};
    console.log(cache)
    return (arg)=> console.log(cache[arg]) ?? (cache[arg]=fn(arg)) 
}
const square = memorize((n)=>n *n);

console.log(square(5))
console.log(square(5))
console.log(square(6))

const students = [  
    { name: 'Alice', score: 85 },  
    { name: 'Bob', score: 45 },  
    { name: 'Charlie', score: 72 },  
    { name: 'Diana', score: 55 }  
];  

// 1. Check if some students have a score >= 60  
const hasPassingStudent = students.some(student => student.score >= 60);  
console.log(`Is there any student with a passing score? ${hasPassingStudent}`); // true  

// 2. Calculate total score using reduce  
const totalScore = students.reduce((sum, student) => sum + student.score, 0);  
console.log(`Total score of all students: ${totalScore}`); // 257  

// 3. Create a string of names of students with scores < 60 using join  
const failingStudents = students.filter(student => student.score < 60)  
                                 .map(student => student.name)  
                                 .join(', ');  
console.log(`Students with failing scores: ${failingStudents}`); // Bob, Diana  

// 4. Log each student's name and score using forEach  
students.forEach(student => {  
    console.log(`${student.name} has a score of ${student.score}`);  
});  

// 5. Check if a specific student is in the list using includes (checking their name)  
const studentNames = students.map(student => student.name);  
const isCharlieEnrolled = studentNames.includes('Charlie');  
console.log(`Is Charlie enrolled in the class? ${isCharlieEnrolled}`); // true