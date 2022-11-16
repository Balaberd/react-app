const getObjectDate = (dateString) => {
  const formatDate = dateString.split(".").reverse();
  formatDate[1] -= 1;
  return new Date(formatDate.join("/"));
};

export default getObjectDate;
