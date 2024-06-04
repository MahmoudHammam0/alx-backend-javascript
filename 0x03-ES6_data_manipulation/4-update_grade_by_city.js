export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  return studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      /* eslint-disable no-param-reassign */
      student.grade = grade ? grade.grade : 'N/A';
      return student;
    });
}
