export default function iterateThroughObject(reportWithIterator) {
  const employees = Array.from(reportWithIterator);
  return employees.join(' | ');
}
