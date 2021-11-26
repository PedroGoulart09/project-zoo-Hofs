const data = require('../data/zoo_data');

function teste() {
  const teste0 = data.species.reduce((acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = 0;
    }
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  return teste0;
}
function countAnimals(animal) {
  const testeBol = teste();
  if (animal === undefined) return testeBol;
  if (!Object.keys(animal).includes('sex')) {
    return testeBol[Object.values(animal)];
  }
  return data.species.find((value) =>
    value.name === animal.specie).residents.filter((value) => value.sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
