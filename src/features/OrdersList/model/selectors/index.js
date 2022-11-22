/* eslint-disable no-continue */
import sortByKey from "features/OrdersList/lib/sortByKey";

export const getchoosedStatuses = (state) => state.filters.choosedStatuses;
export const getSearchbarValue = (state) => state.filters.searchbar;
export const getCheckedOrdersID = (state) => state.orders.checkedOrdersID;
export const getCheckedOrdersIDLength = (state) =>
  state.orders.checkedOrdersID.length;
export const isAdditionalFiltersActive = (state) => {
  const { minDate, maxDate, choosedStatuses, minSum, maxSum } = state.filters;
  if (
    !!minDate ||
    minDate === "Invalid Date" ||
    !!maxDate ||
    maxDate === "Invalid Date" ||
    choosedStatuses.length !== 0 ||
    !!minSum ||
    !!maxSum
  ) {
    return false;
  }
  return true;
};

export const getFilteredOrdersByPageAndAllOrdersLength = (state) => {
  const {
    searchbar,
    minDate,
    maxDate,
    choosedStatuses,
    minSum,
    maxSum,
    activeSorter,
    isAscending,
    pageLimit,
    currentPage,
  } = state.filters;

  const { allOrders } = state.orders;

  const filteredOrders = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < allOrders.length; i++) {
    if (minDate && new Date(allOrders[i].date) < new Date(minDate)) {
      continue;
    } else if (maxDate && new Date(allOrders[i].date) > new Date(maxDate)) {
      continue;
    } else if (
      choosedStatuses.length > 0 &&
      !choosedStatuses.includes(allOrders[i].status)
    ) {
      continue;
    } else if (minSum && allOrders[i].sum < minSum) {
      continue;
    } else if (maxSum && allOrders[i].sum > maxSum) {
      continue;
    } else if (searchbar) {
      if (
        !(
          `${allOrders[i].index}`.includes(searchbar) ||
          allOrders[i].customerName.includes(searchbar)
        )
      )
        continue;
    }
    filteredOrders.push(allOrders[i]);
  }

  const filteredAndSorted = sortByKey(
    activeSorter,
    isAscending,
    filteredOrders
  );
  const ordersByPage = filteredAndSorted.filter(
    (_, index) =>
      index >= pageLimit * (currentPage - 1) && index < pageLimit * currentPage
  );
  return {
    ordersByPage,
    filteredAndSortedOrdersLength: filteredAndSorted.length,
  };
};
