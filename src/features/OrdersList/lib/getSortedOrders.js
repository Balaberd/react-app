// eslint-disable-next-line consistent-return
const getSortedOrders = (orders, sortType, sortDirection) => {
  if (sortType === "sum" || sortType === "numberOfPositions") {
    if (sortDirection) {
      return orders.length
        ? [...orders].sort((a, b) => a[sortType] - b[sortType])
        : orders;
    }
    return orders.length
      ? [...orders].sort((a, b) => b[sortType] - a[sortType])
      : orders;
  }
  if (sortType === "date") {
    if (sortDirection) {
      return orders.length
        ? [...orders].sort(
            (a, b) => new Date(a[sortType]) - new Date(b[sortType])
          )
        : orders;
    }
    return orders.length
      ? [...orders].sort(
          (a, b) => new Date(b[sortType]) - new Date(a[sortType])
        )
      : orders;
  }
  if (sortType === "status") {
    if (sortDirection) {
      return [...orders].sort((a, b) => (a[sortType] > b[sortType] ? 1 : -1));
    }
    return [...orders].sort((a, b) => (a[sortType] > b[sortType] ? -1 : 1));
  }
};

export default getSortedOrders;
