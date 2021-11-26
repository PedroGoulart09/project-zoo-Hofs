const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.filter((value) => value.managers.includes(id)).length > 0;
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.reduce((acc, curr) => (curr.managers.includes(managerId)
      ? acc.concat(`${curr.firstName} ${curr.lastName}`) : acc), []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
