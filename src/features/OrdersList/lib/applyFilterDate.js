import { useSelector } from "react-redux";

const applyFilterDate = (orders) => {
  const { dateFrom, dateTo } = useSelector((state) => state.filterDate);
  let filtredOrders = { ...orders };
  if (dateFrom)
    filtredOrders = filtredOrders.filter(
      (order) => new Date(order.date) > new Date(dateFrom)
    );
  if (dateTo) {
    filtredOrders = filtredOrders.filter(
      (order) => new Date(order.date) < new Date(dateTo)
    );
  }
  return filtredOrders;
};

export default applyFilterDate;
