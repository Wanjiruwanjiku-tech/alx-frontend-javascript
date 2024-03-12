//Returns an array of students foe a specific city with their new grade

export default function updateStudentGradeByCity(studentList, city, newGrades) {
    if (Array.isArray(studentList)) {
        let filteredCity = studentList.filter(mycity => mycity.location === city);
        //map the grades
        let grades = newGrades.map(student = );
    } else {
        return [];

    }
}
