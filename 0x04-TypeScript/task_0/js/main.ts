interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student_1: Student = {
  firstName: "student1",
  lastName: "lastName1",
  age: 11,
  location: "Egypt"
}

const student_2: Student = {
  firstName: "student2",
  lastName: "lastName2",
  age: 12,
  location: "jordan"
}

const studentsList: Student[] = [student_1, student_2];

function studentsTable(students) {
  const table = document.createElement('table');
  students.forEach(({ firstName, location }) => {
    const row = table.insertRow();
    const first_name = row.insertCell();
    const thelocation = row.insertCell();
    first_name.textContent = firstName;
    thelocation.textContent = location;
  });
  document.body.appendChild(table);
}

studentsTable(studentsList);
