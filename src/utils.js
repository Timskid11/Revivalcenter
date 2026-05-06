export function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return d;
  }
}

export function getNextEventDate(targetDayOfWeek, serviceHourOfDay) {
  const now = new Date();
  const currentDay = now.getDay();
  let daysUntil = (targetDayOfWeek - currentDay + 7) % 7;
  if (daysUntil === 0 && now.getHours() >= serviceHourOfDay) daysUntil = 7;
  const nextDate = new Date(now);
  nextDate.setDate(now.getDate() + daysUntil);
  return nextDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getNextFirstFriday(serviceHourOfDay = 22) {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();

  function getFirstFriday(y, m) {
    const d = new Date(y, m, 1);
    const day = d.getDay();
    const offset = (5 - day + 7) % 7;
    d.setDate(1 + offset);
    return d;
  }

  let ff = getFirstFriday(year, month);
  if (now.getDate() > ff.getDate() || (now.getDate() === ff.getDate() && now.getHours() >= serviceHourOfDay)) {
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    ff = getFirstFriday(year, month);
  }

  return ff.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
