// Implement a class HolbertonCourse
export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }
    // VERIFY THE TYPE OF NAME
    set name(name){
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string')
        } else {
            this._name = name;
        }
    }
    // getter method for name
    get name() {
        return this._name;
    }
    
    // VERIFY TYPE OF LENGTH
    set length(length) {
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number')
        } else {
            this._length = length;
        }
    }
    // getter method for length
    get length() {
        return this._length;
    }
    
    // VERIFY TYPE OF STUDENTS
    set students(students) {
        if (students instanceof Array) {
            this._students = students;
        } else {
            throw new TypeError('Students must be an array')
        }
    }
    
    // Add getter method for students
    get students() {
        return this._students;
    }
}