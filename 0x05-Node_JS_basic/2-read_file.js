const fs = require('fs');
const path = require('path');

const countStudents = (thePath) => {
  const filePath = path.join(__dirname, thePath);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const dataList = data.split('\n');
    const students = dataList.slice(1, dataList.length - 1);
    console.log('Number of students:', students.length);
    const mainDict = {
      CS: { Count: 0, List: [] },
      SWE: { Count: 0, List: [] },
    };
    students.forEach((student) => {
      const studentInfo = student.split(',');
      const name = studentInfo[0];
      const field = studentInfo[studentInfo.length - 1];
      if (mainDict[field]) {
        mainDict[field].Count += 1;
        mainDict[field].List.push(name);
      }
    });
    for (const key in mainDict) {
      if (Object.prototype.hasOwnProperty.call(mainDict, key)) {
        const count = mainDict[key].Count;
        const names = mainDict[key].List.join(', ');
        console.log(`Number of students in ${key}: ${count}. List: ${names}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
