/* eslint-disable consistent-return */
const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!fs.existsSync(path)) {
    return reject(new Error('Cannot load the database'));
  }

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Error reading the file'));
    }

    const dataList = data.trim().split('\n');
    const students = dataList.slice(1);
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);
    const mainDict = {};
    students.forEach((student) => {
      const studentInfo = student.split(',');
      const name = studentInfo[0];
      const field = studentInfo[studentInfo.length - 1];
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
    resolve(mainDict);
  });
});
/* eslint-disable consistent-return */

module.exports = readDatabase;
