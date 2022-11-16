const sortByKey = (key, isAscending, array) => {
  const direction = isAscending ? -1 : 1;
  return array.sort((a, b) => (a[key] > b[key] ? direction : -direction));
};

export default sortByKey;
