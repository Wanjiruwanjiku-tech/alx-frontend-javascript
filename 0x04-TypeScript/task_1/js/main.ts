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