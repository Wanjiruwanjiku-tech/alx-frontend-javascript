// Create two students
var studentOne = {
    firstName: "Natalie",
    lastName: "Wanjiru",
    age: 26,
    location: "Nairobi",
};
var studentTwo = {
    firstName: "Raphael",
    lastName: "Kimani",
    age: 18,
    location: "Nakuru",
};
// Create an array containing the two students
var studentlist = [studentOne, studentTwo];
// Render a table using Vanilla Javascript
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
studentlist.forEach(function (student) {
    var row = tableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
table.appendChild(tableBody);
document.body.appendChild(table);
