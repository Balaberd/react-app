import { useSelector } from "react-redux";

const applyFilterDate = (orders) => {
  const { sumFrom, sumTo } = useSelector((state) => state.filtersSum);
  let filtredOrders = { ...orders };
  if (sumFrom)
    filtredOrders = filtredOrders.filter((order) => order.sum > sumFrom);
  if (sumTo) {
    filtredOrders = filtredOrders.filter((order) => order.sum < sumTo);
  }
  return filtredOrders;
};

export default applyFilterDate;
