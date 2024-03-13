// Create an Inteface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// Create two students
const studentOne: Student = {
    firstName: "Natalie",
    lastName: "Wanjiru",
    age: 26,
    location: "Nairobi",

};

const studentTwo: Student = {
    firstName: "Raphael",
    lastName: "Kimani",
    age: 18,
    location: "Nakuru",
};
// Create an array containing the two students
let studentlist: Student[] = [studentOne, studentTwo];

// Render a table using Vanilla Javascript

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentlist.forEach((student) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

table.appendChild(tableBody);
document.body.appendChild(table);