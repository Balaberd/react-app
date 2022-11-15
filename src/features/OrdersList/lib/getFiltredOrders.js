import { useSelector } from "react-redux";

const getFullName = (obj) =>
  `${obj.lastName} ${obj.firstName} ${obj.secondName}`;

const getObjectDate = (dateString) => {
  const formatDate = dateString.split(".").reverse();
  formatDate[1] -= 1;
  return new Date(formatDate.join("/"));
};

const getfiltredOrders = (orders) => {
  const {
    searchbar,
    minDate,
    maxDate,
    statuses,
    minSum,
    maxSum,
    isFiltersActive,
  } = useSelector((state) => state.filters);
  const checkedStatuses = Object.entries(statuses)
    .filter((el) => el[1])
    .map((el) => el[0]);

  let filtredOrders = [...orders];

  if (searchbar) {
    filtredOrders = filtredOrders.filter(
      (order) =>
        getFullName(order).includes(searchbar) ||
        String(order.index).includes(searchbar)
    );
  }

  if (isFiltersActive) {
    if (minSum) {
      filtredOrders = filtredOrders.filter((order) => order.sum > minSum);
    }
    if (maxSum) {
      filtredOrders = filtredOrders.filter((order) => order.sum < maxSum);
    }

    if (minDate) {
      filtredOrders = filtredOrders.filter(
        (order) => new Date(order.date) > getObjectDate(minDate)
      );
    }
    if (maxDate) {
      filtredOrders = filtredOrders.filter(
        (order) => new Date(order.date) < getObjectDate(maxDate)
      );
    }

    if (checkedStatuses.length > 0) {
      filtredOrders = filtredOrders.filter((order) =>
        checkedStatuses.includes(order.status)
      );
    }
  }

  return filtredOrders;
};

export default getfiltredOrders;
