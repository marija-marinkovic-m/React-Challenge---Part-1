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

function getTimeDiff(timestamp1, timestamp2) {
  const t1 = new Date(timestamp1).getTime();
  const t2 = new Date(timestamp2).getTime();

  if (isNaN(t1) || isNaN(t2)) return null;
  
  const result = Object.assign({}, timeDiffResultTemplate, {
    tense: timestamp1 >= timestamp2 ? 'past' : 'future'
  });
  let diffMs = Math.abs(timestamp2 - timestamp1);
  
  // days
  result.days = Math.floor(diffMs/dayMs);
  
  // years and months
  result.months = Math.floor(result.days/31);
  result.years = Math.floor(result.months/12);
  
  // hours, minutes and seconds
  diffMs -= result.days*dayMs;
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
