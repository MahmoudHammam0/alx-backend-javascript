const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');
  const dataList = data.trim().split('\n');
  const students = dataList.slice(1);
  const totalStudents = students.length;
  console.log(`Number of students: ${totalStudents}`);
  const mainDict = {};
  students.forEach((student) => {
    const studentInfo = student.split(',');
    const name = studentInfo[0];
    const field = studentInfo[3];
    if (!mainDict[field]) {
      mainDict[field] = [];
    }
    mainDict[field].push(name);
  });
  for (const key in mainDict) {
    if (Object.prototype.hasOwnProperty.call(mainDict, key)) {
      const count = mainDict[key].length;
      const names = mainDict[key].join(', ');
      console.log(`Number of students in ${key}: ${count}. List: ${names}`);
    }
  }
};

module.exports = countStudents;
