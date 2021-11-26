const data = require('../data/zoo_data');

const obj = { id: '', fullName: '', species: '', locations: '' };
function giveName(firstName, lastName, id, animal, locations) {
  const objCopy = JSON.parse(JSON.stringify(obj));
  objCopy.id = `${id}`;
  objCopy.fullName = `${firstName} ${lastName}`;
  objCopy.species = animal;
  objCopy.locations = locations;
  return objCopy;
}

const teste = () => {
  const firstNameOfEmployees = create('firstName');
  const lastNameOfEmployees = create('lastName');
  const idEmployees = create('id');
  const responsibleForEmployees = create('responsibleFor');
  const animalsResponsibleForEmployees = responsibleForEmployees.map((value) =>
    value.reduce((acc, curr) =>
      acc.concat(data.species.find((value1) => value1.id === curr).name), []));
  const locationsResponsibleForEmployees = responsibleForEmployees.map((value) =>
    value.reduce((acc, curr) =>
      acc.concat(data.species.find((value1) => value1.id === curr).location), []));
  const storeNameEmployees = firstNameOfEmployees.map((value, index) =>
    giveName(value, lastNameOfEmployees[index], idEmployees[index],
      animalsResponsibleForEmployees[index], locationsResponsibleForEmployees[index]));
  return storeNameEmployees;
};
function create(element) {
  const arr = [];
  return data.employees.map((value) => arr.concat(value[element]));
}

function getEmployeesCoverage(val) {
  if (val === undefined) {
    return teste();
  }
  let el = Object.values(val).toString();
  const firstNameOfEmployees = create('firstName').toString();
  const lastNameOfEmployees = create('lastName').toString();
  const idOfEmployees = create('id').toString();
  if (firstNameOfEmployees.includes(el)
    || lastNameOfEmployees.includes(el)
  ) {
    return teste().find((value) => value.fullName.includes(el));
  }
  el = el.split(',').join('');
  if (idOfEmployees.includes(el)) {
    return teste().find((value) => value.id.includes(el));
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
