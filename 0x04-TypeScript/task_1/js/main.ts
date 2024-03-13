// Create the interface teacher
interface Teacher {
    firstName: string;
    lastName: string;
    // Optional attributes denoted by '?'.
    fullTimeEmployee?: boolean;
    yearsOfExperience?: number;
    location?: string;
    //Use an index signature to allow any other attr to be added dynamically
    [key: string]: any;
}
//Task_Two
// Create an interface that extends Teacher

interface Directors extends Teacher {
    numberOfReports: number;
}
// Task_Three
// Write a function that prints teachers

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction =  (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;
//Task Four
// Write a Class described through an interface
interface newClassInterface {
    workOnHomework(): string,
    displayName(): string
}
class StudentClass implements newClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName(): string {
        return this.firstName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
}
// Example Usage
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  // should print
  // Object
  // contract: false
  // firstName: "John"
  // fullTimeEmployee: false
  // lastName: "Doe"
  // location: "London"