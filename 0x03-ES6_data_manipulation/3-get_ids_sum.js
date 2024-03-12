// returns the sum of all student ids 
// accepts a list of students as a parameter

export default function getStudentIdsSum(studentList) {
    if (Array.isArray(studentList)) {
        let ids = studentList.map(student => student.id);
        let sum = ids.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
        return sum;
    } else {
        return [];
    }
}