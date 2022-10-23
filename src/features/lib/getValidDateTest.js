const getValidDateTest = (date) => {
  const dateObject = new Date(date);
  const newDate = {
    day: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
    hours: dateObject.getHours(),
    minutes: dateObject.getMinutes(),
  };
  if (String(newDate.day).length === 1) newDate.day = `0${newDate.day}`;
  if (String(newDate.month).length === 1) newDate.month = `0${newDate.month}`;
  if (String(newDate.hours).length === 1) newDate.hours = `0${newDate.hours}`;
  if (String(newDate.minutes).length === 1)
    newDate.minutes = `0${newDate.minutes}`;

  return `${newDate.day}.${newDate.month}.${newDate.year}, ${newDate.hours}:${newDate.minutes}`;
};

export default getValidDateTest;
