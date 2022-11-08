const getFiltredOrdersForPage = (orders, pageLimit, currentPage) =>
  orders.filter(
    (el, index) =>
      index < pageLimit * currentPage &&
      index > pageLimit * currentPage - (pageLimit + 1)
  );

export default getFiltredOrdersForPage;
