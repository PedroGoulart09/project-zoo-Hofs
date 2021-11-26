const data = require('../data/zoo_data');
//
function verify(acc, curr) {
  if (curr.age < 18) {
    acc.child += 1;
  } else if (curr.age < 50) {
    acc.adult += 1;
  } else if (curr.age >= 50) {
    acc.senior += 1;
  }
}
function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return entrants.reduce((acc, curr) => {
    verify(acc, curr);
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
}
const somaIdadePreco = ({ adult, child, senior }) =>
  adult * data.prices.adult
  + child * data.prices.child
  + senior * data.prices.senior;
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return somaIdadePreco(countEntrants(entrants));
}
module.exports = { calculateEntry, countEntrants };
