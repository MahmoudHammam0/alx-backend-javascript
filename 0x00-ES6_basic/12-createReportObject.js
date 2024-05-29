export default function createReportObject(employeesList) {
  const obj = {};
  /* eslint-disable guard-for-in */
  for (const key in employeesList) {
    obj[key] = employeesList[key];
  }

  const res = {
    allEmployees: obj,
    getNumberOfDepartments(employeesList) {
      return (Object.keys(employeesList).length);
    },
  };

  return (res);
}
