// Returns an array of ids from a list of objects
//Using map function to get the id
export default function getListStudentIds(studentList) {
    if (Array.isArray(studentList)){
        return studentList.map(student => student.id);
    } else {
        return [];
    }
}