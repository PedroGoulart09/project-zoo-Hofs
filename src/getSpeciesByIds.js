const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return ids.reduce((acc, val) => acc.concat(data.species.find((spcId) => spcId.id === val)), []);
}
module.exports = getSpeciesByIds;
