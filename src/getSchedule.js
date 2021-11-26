const data = require('../data/zoo_data');

const days = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: [],
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: [],
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: [],
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: [],
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: [],
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: [],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const names = ['lions', 'tigers', 'bears', 'penguins',
  'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];
function teste1(scheduleTarget) {
  return daysOfWeek.includes(scheduleTarget);
}
function auxiliar1(scheduleTarget) {
  return names.includes(scheduleTarget);
}
function aulixiar2(scheduleTarget) {
  return data.species.find((value) => value.name === scheduleTarget).availability;
}
function auxiliar3(includesDay, scheduleTarget, daysClone) {
  return includesDay ? { [scheduleTarget]: daysClone[scheduleTarget] } : daysClone;
}
function getSchedule(scheduleTarget) {
  const daysClone = JSON.parse(JSON.stringify(days));
  const includesDay = teste1(scheduleTarget);
  const includesName = auxiliar1(scheduleTarget);
  if (scheduleTarget === undefined || includesDay) {
    data.species.map((value) =>
      value.availability.map((value1) =>
        daysClone[value1].exhibition.push(value.name)));
    return auxiliar3(includesDay, scheduleTarget, daysClone);
  }
  if (includesName) {
    return aulixiar2(scheduleTarget);
  }
  if (scheduleTarget !== data.species) {
    return getSchedule();
  }
}
console.log(getSchedule('lions'));

module.exports = getSchedule;
