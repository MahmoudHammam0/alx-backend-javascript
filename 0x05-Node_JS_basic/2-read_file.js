const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const lines = data.trim().split('\n'); // Split the data into lines
  const students = lines.slice(1); // Remove the header line

  const totalStudents = students.length; // Count the total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Initialize an object to hold the count of students in each field
  const fields = {};

  students.forEach((line) => {
    const parts = line.split(','); // Split each line by comma
    const field = parts[3]; // The field is the fourth element in the array
    const firstname = parts[0]; // The firstname is the first element in the array

    // If the field doesn't exist in the fields object,
    // initialize it as an empty array
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname); // Add the firstname to the respective field
  });

  // fields = {
  //   CS: [ 'Johann', 'Arielle', 'Jonathan', 'Emmanuel', 'Guillaume', 'Katie' ],
  //   SWE: [ 'Guillaume', 'Joseph', 'Paul', 'Tommy' ]
  // }

  for (const field in fields) {
    // Make sure the 'fields' object has a property with the name of 'field'
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      const count = fields[field].length;
      const names = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${names}`);
    }
  }
};

module.exports = countStudents;
