export default function createEmployeesObject(departmentName, employees) {
  const company = {};

  company[departmentName] = employees;
  return (company);
}
