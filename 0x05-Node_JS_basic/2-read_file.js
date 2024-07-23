const fs = require('fs');

const countStudents = (thePath) => {
  if (!fs.existsSync(thePath)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(thePath, 'utf8');
  const dataList = data.trim().split('\n');
  const students = dataList.slice(1);
  console.log('Number of students:', students.length);
  const mainDict = {
    CS: { Count: 0, List: [] },
    SWE: { Count: 0, List: [] },
  };
  students.forEach((student) => {
    const studentInfo = student.split(',');
    const name = studentInfo[0];
    const field = studentInfo[3];
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
};

module.exports = countStudents;
