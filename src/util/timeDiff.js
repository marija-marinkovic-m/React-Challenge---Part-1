const minuteMs = 1000*60;
const hourMs = minuteMs*60;
const dayMs = hourMs*24;

const timeDiffResultTemplate = {
  tense: '',
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

function getTimeDiff(timestamp1, timestamp2, displayMonths = false, displayYears = false) {
  const d1 = new Date(timestamp1);
  const d2 = new Date(timestamp2);
  const t1 = d1.getTime();
  const t2 = d2.getTime();

  if (isNaN(t1) || isNaN(t2)) return null;
  
  const result = Object.assign({}, timeDiffResultTemplate, {
    tense: timestamp1 >= timestamp2 ? 'past' : 'future'
  });
  let diffMs = Math.abs(timestamp2 - timestamp1);
  const msDays = Math.floor(diffMs/dayMs);

  if (!displayMonths && !displayYears) {
    result.days = msDays;
  } else if(displayMonths) {
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();
    let years = d2.getFullYear() - d1.getFullYear();

    if (days < 0) {
      const dtmp = new Date(d1.getFullYear(), d1.getMonth() + 1, 1, 0, 0, -1);
      months -= 1;
      days += dtmp.getDate();
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    result.days = days;

    if (displayYears) {
      result.months = months;
      result.years = years;
    } else {
      result.months = months + years * 12;
    }

  }
  
  // hours, minutes and seconds
  diffMs -= msDays*dayMs;
  result.hours = Math.floor(diffMs/1000/60/60);
  diffMs -= result.hours*hourMs;
  result.minutes = Math.floor(diffMs/1000/60);
  diffMs -= result.minutes*minuteMs;
  result.seconds = Math.floor(diffMs/1000);
  
  // normalize (prepare translation keys)
  return Object.keys(result)
    .reduce((acc, key) => {
      const val = result[key];
      acc[val > 1 ? `${key}.pl` : key] = val;
      return acc;
    }, {});
}

export default getTimeDiff;
