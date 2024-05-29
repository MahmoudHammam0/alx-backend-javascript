export default function createIteratorObject(report) {
  const array = [];

  for (const employee of Object.values(report.allEmployees)) {
    array.push(...employee);
  }

  return (array);
}
