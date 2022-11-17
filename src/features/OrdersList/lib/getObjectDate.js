export const getObjectDate = (dateString) => {
  const formatDate = dateString.split(".").reverse();
  formatDate[1] -= 1;
  return new Date(formatDate.join("/"));
};

export const getFormatDate = (date) => {
  const objectDate = new Date(date);
  return `${objectDate.toLocaleDateString()}, ${objectDate
    .toLocaleTimeString()
    .slice(0, 5)}`;
};
