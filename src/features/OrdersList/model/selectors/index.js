import { getObjectDate } from "features/OrdersList/lib/getObjectDate";
import sortByKey from "features/OrdersList/lib/sortByKey";

export const getCheckedStatuses = (state) => state.filters.checkedStatuses;
export const getSearchbarValue = (state) => state.filters.searchbar;
export const getCheckedOrdersId = (state) => state.filters.checkedOrdersId;
export const getCheckedOrdersIdLength = (state) =>
  state.filters.checkedOrdersId.length;

export const getFiltredOrdersByPageAndAllOrdersLength = (state) => {
  const {
    searchbar,
    minDate,
    maxDate,
    checkedStatuses,
    minSum,
    maxSum,
    isAdditionalFiltersActive,
    activeSorter,
    isAscending,
    pageLimit,
    currentPage,
  } = state.filters;

  let filtredOrders = [...state.orders.allOrders];

  if (searchbar) {
    filtredOrders = filtredOrders.filter(
      (order) =>
        `${order.lastName} ${order.firstName} ${order.secondName}`.includes(
          searchbar
        ) || String(order.index).includes(searchbar)
    );
  }

  if (isAdditionalFiltersActive) {
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

  const filtredAndSorted = sortByKey(activeSorter, isAscending, filtredOrders);

  const ordersByPage = filtredAndSorted.filter(
    (order, index) =>
      index >= pageLimit * (currentPage - 1) && index <= pageLimit * currentPage
  );
  return [ordersByPage, filtredAndSorted.length];
};
