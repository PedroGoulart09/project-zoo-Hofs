const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(...id) {
  return id
    .reduce(
      (acc, curr) =>
        acc.concat(data.employees.filter((value) => value.id === curr)),
      [],
    )
    .reduce((acc, curr) => acc.concat(curr.responsibleFor[0]), [])
    .reduce(
      (acc, curr) =>
        acc.concat([data.species.find((value) => value.id === curr).residents]),
      [],
    )
    .map((value) =>
      Object.values(
        value.reduce((big, curr) => (big.age < curr.age ? curr : big)),
      ))
    .flat();
}
console.log(getOldestFromFirstSpecies());
module.exports = getOldestFromFirstSpecies;
