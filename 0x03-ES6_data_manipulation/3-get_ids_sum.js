export default function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce((total, student) => total + student.id, 0);
}
