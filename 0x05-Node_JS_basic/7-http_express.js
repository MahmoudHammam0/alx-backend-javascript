/* eslint-disable consistent-return */
const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const app = express();

const countStudents = (path) => new Promise((resolve, reject) => {
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
    let result = (`Number of students: ${totalStudents}\n`);
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
        result += (`Number of students in ${key}: ${count}. List: ${names}\n`);
      }
    }

    resolve(result.trim());
  });
});

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  countStudents(process.argv[2])
    .then((data) => {
      res.end(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      res.end('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, hostname, () => {
  console.log('Server running at http://%s:%d/', hostname, port);
});

module.exports = app;
/* eslint-disable consistent-return */
