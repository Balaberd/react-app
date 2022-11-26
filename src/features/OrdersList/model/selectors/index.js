import sortByKey from "features/OrdersList/lib/sortByKey";

export const getFilters = (state) => state.filters;
export const getOrders = (state) => state.orders;
export const getOrderForm = (state) => state.orderForm;
export const getCheckedOrdersID = (state) => state.orders.checkedOrdersID;
export const getCheckedOrdersIDLength = (state) =>
  state.orders.checkedOrdersID.length;
export const getOrderByID = (id) => (state) =>
  state.orders.allOrders.filter((order) => order.id === id)[0];
export const getCurrentPage = (state) => state.filters.currentPage;

export const isAdditionalFiltersActive = (state) => {
  const { searchbar, minDate, maxDate, choosedStatuses, minSum, maxSum } =
    state.filters;
  if (
    !!searchbar ||
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

  const filteredOrders = allOrders.filter((order) => {
    if (
      (minDate && new Date(order.date) < new Date(minDate)) ||
      (maxDate && new Date(order.date) > new Date(maxDate)) ||
      (choosedStatuses.length > 0 && !choosedStatuses.includes(order.status)) ||
      (minSum && order.sum < minSum) ||
      (maxSum && order.sum > maxSum) ||
      (searchbar &&
        !(
          `${order.index}`.includes(searchbar) ||
          order.customerName.includes(searchbar)
        ))
    ) {
      return false;
    }
    return true;
  });

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
