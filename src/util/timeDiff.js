const minuteMs = 1000*60;
const hourMs = minuteMs*60;
const dayMs = hourMs*24;

const timeDiffResultTemplate = {
  seconds: 0,
  hours: 0,
  days: 0,
  months: 0,
  years: 0
}

function getTimeDiff(timestamp1, timestamp2) {
  const t1 = new Date(timestamp1).getTime();
  const t2 = new Date(timestamp2).getTime();
  
  if (isNaN(t1) || isNaN(t2)) return null;
  
  const result = Object.assign({}, timeDiffResultTemplate);
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
  
  return result;
}

export default getTimeDiff;
