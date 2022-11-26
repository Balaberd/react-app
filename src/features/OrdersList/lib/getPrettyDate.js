const getPrettyDate = (numbers) => {
  let prettyDate = "";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numbers.length; i++) {
    if (i === 2 || i === 4) prettyDate += ".";
    prettyDate += numbers[i];
  }
  return prettyDate;
};

export default getPrettyDate;
