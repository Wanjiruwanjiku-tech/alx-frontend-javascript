// Returns an aray of objects located in a specific city
// studentList is the list(array) of students and city is the specified city.
export default function getStudentsByLocation(studentList, city) {
    if (Array.isArray(studentList)) {
        return studentList.filter(myCity => myCity.location === city);
    } else {
        return []
    }
}