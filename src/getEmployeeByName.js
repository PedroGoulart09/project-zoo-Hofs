const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.filter(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName)[0];
}
module.exports = getEmployeeByName;
